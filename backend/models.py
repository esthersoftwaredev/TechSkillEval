from app import db
from flask_bcrypt import Bcrypt, generate_password_hash, check_password_hash

bcrypt = Bcrypt()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullName = db.Column(db.String(120), nullable=False)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    is_admin = db.Column(db.Boolean, default=False)

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
    
    def serialize(self):
        return {
            "id": self.id,
            "fullName": self.fullName,
            "username": self.username,
            "email": self.email,
            "is_admin": self.is_admin
        }

class Assessment(db.Model):
    __tablename__ = "assessment"
    id = db.Column(db.Integer, primary_key=True)
    icon = db.Column(db.String(64))
    bgrColor = db.Column(db.String(64))
    title = db.Column(db.String(64))
    hasOptions = db.Column(db.Boolean, default=False)
    category = db.Column(db.String(64))

    options = db.relationship('Option', backref='assessment', lazy=True)

    def serialize(self):
        return {
            'id': self.id,
            'icon': self.icon,
            'bgrColor': self.bgrColor,
            'title': self.title,
            'hasOptions': self.hasOptions,
            'category': self.category,
            'options': [option.serialize() for option in self.options]
        }

class Option(db.Model):
    __tablename__ = "option"
    id = db.Column(db.Integer, primary_key=True)
    icon = db.Column(db.String(64))
    bgrColor = db.Column(db.String(64))
    title = db.Column(db.String(64))
    category = db.Column(db.String(64))
    assessment_id = db.Column(db.Integer, db.ForeignKey('assessment.id'))

    def serialize(self):
        return {
            'id': self.id,
            'icon': self.icon,
            'bgrColor': self.bgrColor,
            'title': self.title,
            'category': self.category
        }    