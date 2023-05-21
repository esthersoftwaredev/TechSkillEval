from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///my_database.db'  # You can choose a different location
db = SQLAlchemy(app)
login_manager = LoginManager(app)

login_manager = LoginManager(app)
login_manager.login_view = 'login' 

# Import the routes after initializing the Flask app
from routes import *

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
