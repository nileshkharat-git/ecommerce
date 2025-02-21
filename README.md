# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

To run this project, you need to have Node.js (version 14 or higher) installed.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/nileshkharat-git/ecommerce.git
   cd ecommerce```

2.Install dependencies:
  
  ```sh
    npm install
  ```
3.Start the development server:
  ```sh
    npm start
```
# Flask API setup
1.You can install the dependencies by running:
```sh
  cd api
```
2.Create a virtual environment (optional but recommended):
```sh
    python3 -m venv venv
```
3.Activate the virtual environment:
a)On Windows:
```sh
  .\venv\Scripts\activate
```

b)On macOS/Linux:
```sh
  source venv/bin/activate
```
4.Install the required dependencies:
```sh
  pip install -r requirements.txt
```
## Running the application
1.Set the environment variable for Flask:
a)On Windows:
```sh
  set FLASK_APP=app.py
  set FLASK_ENV=development
```
b)On macOS/Linux:
```sh
export FLASK_APP=app.py
export FLASK_ENV=development
```

2.Start the Flask development server:
```sh
  flask run
```



