from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pymongo import MongoClient
import uvicorn
from models import JsonData

app = FastAPI()

# MongoDB connection setup
mongo_client = MongoClient("mongodb://localhost:27017/")
db = mongo_client["cofferdata"]
collection = db["demo7"]

@app.get("/")
def hello():
    return JSONResponse("Hello from fastapi")

@app.get("/fetch-data", response_model=list[JsonData])
def fetch_data():
    data = []    
    cursor = collection.find()
    for document in cursor:
        data.append(document)
    return data
        

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)