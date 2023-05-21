from flask import Flask
from flask_cors import CORS
from extensions import db, login_manager

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///my_database.db'

    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'login'  # Specifies the route for login (if you have it)

    with app.app_context():
        # Import the routes after initializing extensions
        from models import User  # Import models here, after initializing db
        from routes import user_routes  # Import routes here

        app.register_blueprint(user_routes)

        @login_manager.user_loader
        def load_user(user_id):
            return User.query.get(int(user_id))
        
        db.create_all()

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
