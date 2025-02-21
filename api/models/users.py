from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash

db = SQLAlchemy()
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    public_id = db.Column(db.String(120), unique=True, nullable=False)

    def __init__(self, email, password, public_id):
        self.email = email
        self.password = generate_password_hash(password)
        self.public_id = public_id
