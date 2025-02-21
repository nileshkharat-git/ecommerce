from flask import request,Blueprint,jsonify
from models.carts import Cart
from models.users import db
from models.products import Product


cart_manage = Blueprint('cart', __name__, url_prefix='/cart')

@cart_manage.route('/get-cart/<user_id>',methods=['GET'])
def get_cart(user_id):
    cart = Cart.query.filter_by(user_id=user_id).all()
    return jsonify([{'id': item.id, 'user_id': item.user_id, 'product_id': item.product_id, "product_details":item.product.to_dict()} for item in cart]), 200


@cart_manage.route('/add_to_cart',methods=['POST'])
def add_to_cart():
    user_id = request.form.get('user_id')
    product_id = request.form.get('product_id')
    cart = Cart(user_id=user_id, product_id=product_id)
    db.session.add(cart)
    db.session.commit()

    return jsonify({'message': 'Item added successfully'}), 201

@cart_manage.route('/remove_from_cart/<cart_id>',methods=['DELETE'])
def remove_from_cart(cart_id):
    cart = Cart.query.filter_by(id=cart_id).first()
    if cart:
        db.session.delete(cart)
        db.session.commit()
        return jsonify({'message': 'Cart item deleted successfully'}), 200
    else:
        return jsonify({'message': 'Cart item not found'}), 404