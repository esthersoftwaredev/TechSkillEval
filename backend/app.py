from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///my_database.db'  
app.config['JWT_SECRET_KEY'] = '4ac33ad3a49fe6570319d31899dae6d1'  # replace with your secret key
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['JWT_COOKIE_SECURE'] = False  # Set to True in a production environment with HTTPS
db = SQLAlchemy(app)

# Import the routes after initializing the Flask app
from routes import *

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)