from app import app, db
from controllers import get_assessments, get_assessment

@app.route('/')
def index():
    return 'Hello, Flask! by Esther White'

@app.route('/frontend-assessments', methods=['GET'])
def get_all_assessments():
    return get_assessments()


@app.route('/assessments/<assessment_id>', methods=['GET'])
def get_single_assessment(assessment_id):
    return get_assessment(assessment_id)
