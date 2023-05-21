from app import db
from models import User, Assessment
from flask import jsonify

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

