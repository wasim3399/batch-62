from fastapi.testclient import TestClient
from comments.main import app

def test_file():
    client = TestClient(app)
    response = client.get("/test")
    assert response.status_code == 200
    assert response.json() == {'message': 'Hello World'}