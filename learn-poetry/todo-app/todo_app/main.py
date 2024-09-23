from fastapi import FastAPI
from sqlmodel import SQLModel, create_engine, Session, Field
from contextlib import asynccontextmanager
from todo_app import settings

# create table
class Todo(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(index=True)

# create connection with database
connection_string : str = str(settings.database_url).replace('postgresql', 'postgresql+psycopg')

engine = create_engine(connection_string)

def create_db_and_tables():
    print('Creating tables')
    SQLModel.metadata.create_all(engine)
    print('Tables created')

@asynccontextmanager
async def lifespan(todo_app: FastAPI):
    print('Server startup')
    create_db_and_tables()
    yield

todo_app : FastAPI = FastAPI(lifespan=lifespan)

@todo_app.get('/')
def todos():
    with Session(engine) as session:
        todos = session.query(Todo).all()  # Fetching all todos from the database
        return todos 

@todo_app.post('/todo')
def create_todo(todo: Todo):
    with Session(engine) as session:
        session.add(todo)
        session.commit()
        session.refresh(todo)
        return todo