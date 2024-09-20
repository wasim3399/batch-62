from fastapi import FastAPI
from app import settings

todo_app : FastAPI = FastAPI()

@todo_app.get('/')
def root_function():
    return {'data': 'Hello World'}

@todo_app.get('/get_db')
def get_db():
    return {'DB': settings.DATABASE_URL}