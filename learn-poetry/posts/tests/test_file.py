from fastapi.testclient import TestClient
from posts.main import app

def test_read_main():
    client = TestClient(app)
    response = client.get("/test")
    assert response.status_code == 200
    assert response.json() == {'test': 'test'}