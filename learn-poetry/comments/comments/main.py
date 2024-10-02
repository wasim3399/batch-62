from fastapi import FastAPI, Depends
from sqlmodel import SQLModel, Field, create_engine, Session, select
from contextlib import asynccontextmanager
from typing import Annotated
from comments import settings

# create db connection and table class
class Comments(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    comment: str

connection_string = str(settings.DATABASE_URL).replace('postgresql', 'postgresql+psycopg')

engine = create_engine(connection_string, connect_args={"sslmode": "require"})
# ends

# create table
def create_db_and_tables():
    print('creating tables')
    SQLModel.metadata.create_all(engine)
    print('tables created')

# calling create table function
@asynccontextmanager
async def lifespan(app: FastAPI):
    create_db_and_tables()
    yield

# common function for getting session
def get_session():
    with Session(engine) as session:
        yield session

app = FastAPI(lifespan=lifespan)

@app.get('/test')
def test():
    return {'message': 'Hello World'}

# get commments
@app.get('/comments')
def get_comments(session : Annotated[Session, Depends(get_session)]) :
    comments = session.exec(select(Comments)).all()
    return comments

# create comment
@app.post('/comments')
def create_comment(comment: Comments, session: Annotated[Session, Depends(get_session)]) :
    session.add(comment)
    session.commit()
    session.refresh(comment)
    return comment

# delete comment
@app.delete('/comments/{comment_id}')
def delete_comment(comment_id: int, session: Annotated[Session, Depends(get_session)]) :
    statement = select(Comments).where(Comments.id == comment_id)
    result = session.exec(statement).one()
    session.delete(result)
    session.commit()
    return {'data': 'deleted'}

# update comment
@app.put('/comments/{comment_id}')
def update_comment(comment_id: int, comment: Comments, session: Annotated[Session, Depends(get_session)]) :
    statement = select(Comments).where(Comments.id == comment_id)
    result = session.exec(statement).one()
    result.comment = comment.comment
    session.add(result)
    session.commit()
    session.refresh(result)
    return result
