from flask import Flask
from flask_restful import Api, Resource
app = Flask(__name__)

@app.route("/")
def hello():
  return {"post": "Hello World!"}

if __name__ == "__main__":
  app.run(debug=True)