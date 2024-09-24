from fastapi.testclient import TestClient
from todo.main import app

# mock test run
def test_read_main():
    greeting = 'hello world'
    assert greeting == 'hello world'

# dynamic test run with get route
def test_get_todos():
    client = TestClient(app)
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {'data': 'hello world'}
