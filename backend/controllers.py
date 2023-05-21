from app import db
from models import User, Assessment
from flask import jsonify

def get_assessments():
    assessments = Assessment.query.all()
    return jsonify([assessment.serialize() for assessment in assessments])

# def get_assessments():
#     assessments = Assessment.query.all()
#     # Convert the assessments data into a serializable format (e.g., list of dictionaries)
#     assessments_data = []
#     for assessment in assessments:
#         options = []
#         for option in assessment.options:
#             options.append({
#                 'icon': option.icon,
#                 'bgrColor': option.bgrColor,
#                 'title': option.title,
#             })
#         assessments_data.append({
#             'id': assessment.id,
#             'icon': assessment.icon,
#             'bgrColor': assessment.bgrColor,
#             'title': assessment.title,
#             'hasOptions': assessment.hasOptions,
#             'options': options
#         })
#     return jsonify(assessments_data)

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

