from app import db
from models import User, Assessment
from flask import jsonify

def get_assessments():
    assessments = Assessment.query.all()
    # Convert the assessments data into a serializable format (e.g., list of dictionaries)
    assessments_data = [{'id': assessment.id, 'name': assessment.name, 'description': assessment.description} for assessment in assessments]
    return jsonify(assessments_data)

def get_assessment(assessment_id):
    assessment = Assessment.query.get(assessment_id)
    if assessment:
        assessment_data = {'id': assessment.id, 'name': assessment.name, 'description': assessment.description}
        return jsonify(assessment_data)
    else:
        return jsonify({'message': 'Assessment not found'})
