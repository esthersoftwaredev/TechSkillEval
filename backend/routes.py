from app import app, db
from controllers import get_fe_assessments, get_mean_assessments, get_mern_assessments, get_backend_assessments, get_assessment
from controllers import get_fe_assessments, get_mean_assessments, get_mern_assessments, get_backend_assessments, get_fullstack_assessments, get_assessment

@app.route('/')
def index():
    return 'Hello, Flask! by Esther White'
@app.route('/frontend-assessments', methods=['GET'])
def frontend_assessments():
    return get_fe_assessments()
@app.route('/mean-assessments', methods=['GET'])
def mean_assessments():
    return get_mean_assessments()
@app.route('/mern-assessments', methods=['GET'])
def mern_assessments():
    return get_mern_assessments()

@app.route('/fullstack-assessments', methods=['GET'])
def fullstack_assessments():
    return get_fullstack_assessments()

@app.route('/backend-assessments', methods=['GET'])
def backend_assessments():
    return get_backend_assessments()
@app.route('/assessments/<assessment_id>', methods=['GET'])
def get_assessment(assessment_id):
    return get_assessment(assessment_id)