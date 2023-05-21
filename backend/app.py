from flask import Flask
from flask_cors import CORS
from extensions import db, login_manager
from models import User

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SECRET_KEY'] = '161865b34302a09e2078ac2bdd92da02'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///my_database.db'

    db.init_app(app)
    login_manager.init_app(app)
    # login_manager.login_view = 'users.login'  # Specifies the route for login (if you have it)

    with app.app_context():

        @login_manager.user_loader
        def load_user(user_id):
            return User.query.get(int(user_id))
        
        db.create_all()

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
