from fastapi import FastAPI, Depends
from sqlmodel import SQLModel, create_engine, Session, select, Field
from contextlib import asynccontextmanager
from typing import Annotated
from posts import settings

# make db connection
class Post(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    title: str
    content: str

connection_string = str(settings.DATABASE_URL).replace(
    "postgresql", "postgresql+psycopg"
)

engine = create_engine(connection_string, connect_args={"sslmode": "require"})

# create table
def create_db_and_tables():
    print("Creating database and tables")
    SQLModel.metadata.create_all(engine)
    print("Database and tables created")

@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield
# end session

app = FastAPI(lifespan=lifespan)

@app.get("/test")
def test():
    return {"message": "Hello World"}

# get session
def get_session():
    with Session(engine) as session:
        yield session

# get all posts
@app.get("/posts")
def get_posts(session : Annotated[Session, (Depends(get_session))]):
    statement = select(Post)
    result = session.exec(statement).all()
    return result