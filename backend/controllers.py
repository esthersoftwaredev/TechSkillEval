from extensions import db
from models import User, Assessment
from flask import request, jsonify
from flask_login import login_user, login_required, current_user

def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user:
        return jsonify(message='Username already exists'), 409

    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify(message='User created'), 201

def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and user.check_password(password):
        login_user(user)
        return jsonify(message='Logged in'), 200
    else:
        return jsonify(message='Invalid username or password'), 400


@login_required
def profile():
    return jsonify(username=current_user.username, email=current_user.email)

@login_required
def get_users():
    users = User.query.all()
    user_list = [{'username': user.username, 'email': user.email} for user in users]
    return jsonify(users=user_list)

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

