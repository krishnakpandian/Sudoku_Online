from flask import Flask
from flask_restful import Api, Resource
from flask_socketio import SocketIO, send
app = Flask(__name__)

@app.route("/")
def hello():
  return {"post": "Hello World!"}


socketIo = SocketIO(app, cors_allowed_origins="*")

app.debug = True
app.host = 'localhost'

@socketIo.on("message")
def handleMessage(msg):
  print(msg)
  send(msg, broadcast=True)
  return None

if __name__ == "__main__":
  socketIo.run(app)