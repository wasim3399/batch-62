from fastapi import FastAPI, Depends
from sqlmodel import SQLModel, create_engine, Session, select, Field
from typing import Annotated
from contextlib import asynccontextmanager
from todo import settings


# make db connection
class Todo(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    title: str = Field(index=True)

conntion_string = str(settings.DATABASE_URL).replace('postgresql', 'postgresql+psycopg')

engine = create_engine(conntion_string, connect_args={'sslmode': 'require'}, pool_recycle=300)
# setup connection completed

# creating tables setup and session connection
def create_tables():
    print('creating tables')
    SQLModel.metadata.create_all(engine)
    print('tables created')

@asynccontextmanager
async def lifespan(app: FastAPI):
    print('lifespan function called')
    create_tables()
    yield
# end session
    
# setup common setup connection
def get_session():
    with Session(engine) as session:
        yield session


app = FastAPI(lifespan=lifespan)

@app.get('/')
def index():
    return {'data': 'hello world'}

# get all todo
@app.get('/todo')
def get_todo(session : Annotated[Session, Depends(get_session)]):
    # comment session when done with dependency injection
    # with Session(engine) as session:
        statement = select(Todo)
        result = session.exec(statement).all()
        return result

# create todo
@app.post('/todo')
def create_todo(todo: Todo, session: Annotated[Session, Depends(get_session)]):
    session.add(todo)
    session.commit()
    session.refresh(todo)
    return todo

# update todo
@app.put('/todo/{todo_id}')
def update_todo(todo_id: int, todo: Todo, session: Annotated[Session, Depends(get_session)]):
    # with Session(engine) as session:
        statement = select(Todo).where(Todo.id == todo_id)
        result = session.exec(statement).one()
        result.title = todo.title
        session.add(result)
        session.commit()
        session.refresh(result)
        return result

# delete todo
@app.delete('/todo/{todo_id}')
def delete_todo(todo_id: int, session: Annotated[Session, Depends(get_session)]):
    # with Session(engine) as session:
        statement = select(Todo).where(Todo.id == todo_id)
        result = session.exec(statement).one()
        session.delete(result)
        session.commit()
        return {'data': 'deleted'}