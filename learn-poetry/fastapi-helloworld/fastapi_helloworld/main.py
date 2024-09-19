from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def read_root():
    return {'data': 'Hello World'}

@app.get('/city')
def get_city():
    return {'data': 'Lahore'}