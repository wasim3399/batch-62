from fastapi import FastAPI
from app import settings
from sqlmodel import SQLModel, create_engine, Session, Field
from contextlib import asynccontextmanager

# 
# step 1: create db schema
class Todo(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str

# step 2: create connection
connection_string : str = str(settings.DATABASE_URL).replace('postgresql', 'postgresql+psycopg')

engine = create_engine(connection_string)

# step 3: create table
def create_db_and_tables():
    print('Creating tables')
    SQLModel.metadata.create_all(engine)
    print('Tables created')

@asynccontextmanager
async def lifespan(app: FastAPI):
    print('server startup')
    create_db_and_tables()
    yield

todo_app : FastAPI = FastAPI(lifespan=lifespan)

@todo_app.get('/')
def root_function():
    return {'data': 'Hello World'}

@todo_app.get('/get_db')
def get_db():
    return {'DB': settings.DATABASE_URL, 'Connection': connection_string}

# post data
@todo_app.post('/todo')
def create_todo(todo: Todo):
    with Session(engine) as session:
        session.add(todo)
        session.commit()
        session.refresh(todo)
        return todo