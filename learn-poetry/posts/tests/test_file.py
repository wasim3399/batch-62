from fastapi.testclient import TestClient
from posts.main import app

def test_all_posts():
    client = TestClient(app)
    response = client.get("/posts")
    assert response.status_code == 200
    return response.json()