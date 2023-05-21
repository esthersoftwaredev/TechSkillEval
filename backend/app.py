from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///my_database.db'  # You can choose a different location
db = SQLAlchemy(app)

# Import the routes after initializing the Flask app
from routes import *

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)