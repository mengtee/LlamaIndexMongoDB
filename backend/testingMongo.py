from pymongo.mongo_client import MongoClient
uri = "mongodb+srv://mengtee1127:pmlz5929@cluster0.nh36vby.mongodb.net/"
# Create a new client and connect to the server
client = MongoClient(uri)
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)