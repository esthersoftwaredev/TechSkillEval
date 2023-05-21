from flask import Blueprint
from flask_login import login_required
from controllers import register, login, profile,get_fe_assessments, get_mean_assessments, get_mern_assessments, get_backend_assessments, get_fullstack_assessments, get_assessment

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
    return 'Hello, Flask! by Esther White'

@user_routes.route('/register', methods=['POST'])
def register_route():
    return register()

@user_routes.route('/login', methods=['POST'])
def login_route():
    return login()

@user_routes.route('/profile', methods=['GET'])
@login_required
def profile_route():
    return profile()

@user_routes.route('/frontend-assessments', methods=['GET'])
def frontend_assessments():
    return get_fe_assessments()

@user_routes.route('/mean-assessments', methods=['GET'])
def mean_assessments():
    return get_mean_assessments()

@user_routes.route('/mern-assessments', methods=['GET'])
def mern_assessments():
    return get_mern_assessments()

@user_routes.route('/fullstack-assessments', methods=['GET'])
def fullstack_assessments():
    return get_fullstack_assessments()

@user_routes.route('/backend-assessments', methods=['GET'])
def backend_assessments():
    return get_backend_assessments()

@user_routes.route('/assessments/<assessment_id>', methods=['GET'])
def get_assessment(assessment_id):
    return get_assessment(assessment_id)
