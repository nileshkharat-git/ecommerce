from models.users import User, db
from models.products import Product

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
    user = db.relationship(User, backref=db.backref('carts', lazy=True))
    product_id = db.Column(db.Integer, db.ForeignKey(Product.id), nullable=False)
    product = db.relationship(Product, backref=db.backref('carts', lazy=True))

    def __init__(self, user_id, product_id):
        self.user_id = user_id
        self.product_id = product_id

    