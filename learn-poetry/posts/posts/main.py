from fastapi import FastAPI, Depends
from sqlmodel import SQLModel, Session, select, create_engine, Field
from typing import Annotated
from contextlib import asynccontextmanager
from posts.settings import DATABASE_URL

# establish connection to database and create tables
class Posts(SQLModel, table=True):
    __tablename__ = "post" # type: ignore
    id: int | None = Field(default=None, primary_key=True)
    title: str

connection_string = str(DATABASE_URL).replace("postgresql", "postgresql+psycopg")

engine = create_engine(connection_string)
# connection ends

# create tables
def create_tables():
    print("Creating tables...")
    SQLModel.metadata.create_all(engine)
    print("Tables created.")

# call create_tables function
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Server startup")
    create_tables()
    yield

# get session
def get_session():
    with Session(engine) as session:
        yield session

app = FastAPI(lifespan=lifespan)

# test route
@app.get('/test')
def test():
    return {'test': 'test'}

# get all posts
@app.get('/posts')
def get_posts(session : Annotated[Session, Depends(get_session)]):
    posts = session.exec(select(Posts)).all()
    return posts

# create post
@app.post('/posts')
def create_post(post: Posts, session: Annotated[Session, Depends(get_session)]):
    session.add(post)
    session.commit()
    session.refresh(post)
    return post

# delete post
@app.delete('/posts/{id}')
def delete_post(id: int, session: Annotated[Session, Depends(get_session)]):
    post = session.get(Posts, id)
    if not post:
        return {'message': 'Post not found'}
    session.delete(post)
    session.commit()
    return {'message': 'Post deleted'}

# update post
@app.put('/posts/{id}')
def update_post(id: int, post: Posts, session: Annotated[Session, Depends(get_session)]):
    post_to_update = session.get(Posts, id)
    if not post_to_update:
        return {'message': 'Post not found'}
    post_to_update.title = post.title
    session.commit()
    session.refresh(post_to_update)
    return post_to_update