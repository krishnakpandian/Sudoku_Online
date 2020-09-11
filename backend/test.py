import requests

BASE = "http://127.0.0.1:5000/"

data = {}
data['messages'] = ["hello world", "test message"]
response = requests.post(BASE + "add",data=data)
print(response.json)
response = requests.get(BASE + "list", data={'id':"USWaLJ3MQ0pA9GOKd2u0"})
print(response.json)
response = requests.post(BASE + "update")
print(response.json)
response = requests.put(BASE + "update")
print(response.json)
response = requests.delete(BASE + "delete")
print(response.json)