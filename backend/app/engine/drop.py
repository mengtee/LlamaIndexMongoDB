import pymongo
import os
from dotenv import load_dotenv

load_dotenv()

database_name=os.environ["MONGODB_DATABASE"]
collection_name=os.environ["MONGODB_VECTORS"]
connection_string = os.environ["MONGO_URI"]

client = pymongo.MongoClient(connection_string)
db = client[database_name]
collection = db[collection_name]

result = collection.drop_indexes()
print(f"Indexes dropped: {result}")