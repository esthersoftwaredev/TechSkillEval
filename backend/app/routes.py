from flask import jsonify
from .models import Assessment, Option

def register_routes(app):
    @app.route('/')
    def index():
        return 'Hello, Flask! by Esther White'

    @app.route('/assessments/<string:category>', methods=['GET'])
    def get_assessments(category):
        assessments = Assessment.query.filter_by(category=category).all()
        return jsonify([assessment.serialize() for assessment in assessments]), 200

    @app.route('/options/<string:category>', methods=['GET'])
    def get_options(category):
        options = Option.query.filter_by(category=category).all()
        return jsonify([option.serialize() for option in options]), 200