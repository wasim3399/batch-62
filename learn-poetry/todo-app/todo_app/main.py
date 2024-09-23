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

# create a new todo
@todo_app.post('/todo')
def create_todo(todo: Todo):
    with Session(engine) as session:
        session.add(todo)
        session.commit()
        session.refresh(todo)
        return todo
    
# update a todo
@todo_app.put('/todo/{todo_id}')
def update_todo(todo_id: int, todo: Todo):
    with Session(engine) as session:
        existing_todo = session.get(Todo, todo_id)
        if existing_todo:
            existing_todo.title = todo.title
            session.add(existing_todo)
            session.commit()
            session.refresh(existing_todo)
            return existing_todo
        else:
            return {'error': 'Todo not found'}
        

# delete a todo
@todo_app.delete('/todo/{todo_id}')
def delete_todo(todo_id: int):
    with Session(engine) as session:
        todo = session.get(Todo, todo_id)