from models.users import db


class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    price = db.Column(db.Float, nullable=False)
    filename = db.Column(db.String(80), nullable=False)
    category = db.Column(db.String(80), nullable=False)
    
    def __init__(self, name, price, filename, category):
        self.name = name
        self.price = price
        self.filename = filename
        self.category = category
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'filename': self.filename,
            'category': self.category
        }