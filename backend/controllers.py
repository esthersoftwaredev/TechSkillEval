from app import db
from models import User, Assessment
from flask import jsonify, request
from flask_jwt_extended import create_access_token, set_access_cookies, jwt_required, get_jwt_identity

@jwt_required()
def get_all_users():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user).first()

    # If the user is not an admin, return a 403 Forbidden status code
    if not user.is_admin:
        return jsonify({'msg': 'Access forbidden'}), 403

    users = User.query.all()
    return jsonify([user.serialize() for user in users]), 200

def register_user():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    fullName = data.get('fullName')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user is not None:
        return jsonify({'message': 'Username already exists.'}), 400

    user = User(username=username, email=email, fullName=fullName)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify(user.serialize()), 201

def login_user():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if not username:
        return jsonify({"msg": "Missing username parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400

    user = User.query.filter_by(username=username).first()

    if user is None or not user.check_password(password):
        return jsonify({"msg": "Bad username or password"}), 401

    # Identity can be any data that is json serializable
    access_token = create_access_token(identity=username)
    response = jsonify({'login': True})
    set_access_cookies(response, access_token)
    return response, 200

def get_fe_assessments():
    assessments = Assessment.query.filter_by(category='frontend').all()
    return jsonify([assessment.serialize() for assessment in assessments])

def get_mean_assessments():
    assessments = Assessment.query.filter_by(category='mean').all()
    return jsonify([assessment.serialize() for assessment in assessments])

def get_mern_assessments():
    assessments = Assessment.query.filter_by(category='mern').all()
    return jsonify([assessment.serialize() for assessment in assessments])

def get_backend_assessments():
    assessments = Assessment.query.filter_by(category='backend').all()
    return jsonify([assessment.serialize() for assessment in assessments])

def get_fullstack_assessments():
    assessments = Assessment.query.filter_by(category='fullstack').all()
    return jsonify([assessment.serialize() for assessment in assessments])

def get_assessment(assessment_id):
    assessment = Assessment.query.get(assessment_id)
    if assessment:
        options = []
        for option in assessment.options:
            options.append({
                'icon': option.icon,
                'bgrColor': option.bgrColor,
                'title': option.title,
            })
        assessment_data = {
            'id': assessment.id,
            'icon': assessment.icon,
            'bgrColor': assessment.bgrColor,
            'title': assessment.title,
            'hasOptions': assessment.hasOptions,
            'options': options
        }
        return jsonify(assessment_data)
    else:
        return jsonify({'message': 'Assessment not found'})