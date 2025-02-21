from flask import request,Blueprint,jsonify
from werkzeug.utils import secure_filename
from models.products import Product
from models.users import db
import os

product_manage = Blueprint('product', __name__, url_prefix='/product')

@product_manage.route('/get_products',methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([{'product_id':product.id,'product_name': product.name, 'product_price': product.price, 'product_category': product.category, 'product_image': product.filename} for product in products]), 200

@product_manage.route('/add_product',methods=['POST'])
def add_product():
    from api import app

    product_name = request.form.get('product_name')
    price = request.form.get('product_price')
    product_category = request.form.get('product_category') 
    product_image = request.files['product_image']

    if product_image.filename == '':
        return jsonify({'message': 'No selected file'}), 400
    
    filename = secure_filename(product_image.filename)
    product_image.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    product = Product(name=product_name, price=price, filename=filename, category=product_category)

    db.session.add(product)
    db.session.commit()
    return jsonify({'product_name': product_name, 'product_price': price, 'product_category': product_category, 'product_image': product_image.filename}), 200