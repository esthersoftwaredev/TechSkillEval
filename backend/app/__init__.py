from flask import Flask
from flask_cors import CORS, cross_origin
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": ["https://vitsantix.com", "http://localhost:4200"]}}, supports_credentials=True)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///my_database.db'  
    app.config['JWT_SECRET_KEY'] = '4ac33ad3a49fe6570319d31899dae6d1'  
    app.config['JWT_TOKEN_LOCATION'] = ['cookies']
    app.config['JWT_COOKIE_SECURE'] = False  

    db.init_app(app)
    jwt.init_app(app)

    with app.app_context():
        db.create_all()

    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint, url_prefix='/auth')

    # Import the routes after initializing the Flask app
    from .routes import register_routes
    register_routes(app)

    return app
