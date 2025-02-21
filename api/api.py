from flask import Flask, send_from_directory, request
from werkzeug.security import check_password_hash
from routes.product_manage import product_manage
from routes.cart_manage import cart_manage
from models.users import db, User
import os
import jwt
import uuid

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'thisisasecretkey'
app.config['UPLOAD_EXTENSIONS'] = ['png', 'jpg', 'jpeg', 'webp']
app.config['UPLOAD_FOLDER'] = os.path.join(app.root_path, 'media')

db.init_app(app)
app.register_blueprint(product_manage)
app.register_blueprint(cart_manage)


@app.route('/get_time')
def get_time():
    return {'time': '2023-01-01'}

@app.route('/media/<path:path>')
def send_media(path):
    return send_from_directory(app.config['UPLOAD_FOLDER'], path, as_attachment=True)

@app.route('/auth/register', methods=['POST'])
def user_register():
    email = request.json['email']
    password = request.json['password']

    user = User(email=email, password=password, public_id=str(uuid.uuid4()))

    db.session.add(user)
    db.session.commit()

    return {'message': 'success'}, 201

@app.route('/auth/login', methods=['POST'])
def user_login():
    email = request.json['email']
    password = request.json['password']

    user = User.query.filter_by(email=email).first()

    if user and check_password_hash(user.password, password):
        token = jwt.encode({"public_id": user.public_id}, app.config['SECRET_KEY'],"HS256")
        return {'token': f'{token}', 'user_id': f'{user.id}'}, 200
    else:
        return {'message': 'Invalid email or password'}, 401
    
if __name__ == '__main__':
    app.run(debug=True)        
