from app import db

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

class Assessment(db.Model):
    __tablename__ = "assessment"
    id = db.Column(db.Integer, primary_key=True)
    icon = db.Column(db.String(64))
    bgrColor = db.Column(db.String(64))
    title = db.Column(db.String(64))
    hasOptions = db.Column(db.Boolean, default=False)
    options = db.relationship('Option', backref='assessment', lazy=True)

    def serialize(self):
        return {
            'id': self.id,
            'icon': self.icon,
            'bgrColor': self.bgrColor,
            'title': self.title,
            'hasOptions': self.hasOptions,
            'options': [option.serialize() for option in self.options]
        }

class Option(db.Model):
    __tablename__ = "option"
    id = db.Column(db.Integer, primary_key=True)
    icon = db.Column(db.String(64))
    bgrColor = db.Column(db.String(64))
    title = db.Column(db.String(64))
    assessment_id = db.Column(db.Integer, db.ForeignKey('assessment.id'))

    def serialize(self):
        return {
            'id': self.id,
            'icon': self.icon,
            'bgrColor': self.bgrColor,
            'title': self.title
        }    

