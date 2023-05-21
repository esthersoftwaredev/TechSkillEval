from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

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

