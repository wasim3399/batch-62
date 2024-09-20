# Poetry setup and installation instructions
- install python (pip installed by default)
- install pipx `pip install pipx`
- install poetry `pipx install poetry` and `pipx ensurepath`
- create new project `poetry new project_name` or `poetry new todo-server --name=app` and cd to project directory
- set environment `poetry shell` or `poetry env info --path`
- `cmd + shift + p` to select interpreter and then enter
- `poetry new` for new project
- `poetry add fastapi` to add new packages
- `poetry run uvicorn project.file:function_variable --reload` to run the project
## References
- [Youtube Playlist](https://www.youtube.com/watch?v=iJOT0eBoK78&list=PLlD4HFUxnECvSbTUzOaX93EZwHBfl33NZ&index=2)
- [Create Poetry Project](https://github.com/panaverse/learn-generative-ai/tree/main/05_microservices_all_in_one_platform/09_create_project)
- [Steps](https://github.com/panaverse/learn-generative-ai/blob/main/05_microservices_all_in_one_platform/09_create_project/Fast%20Api%20with%20Poetry%20Steps.txt)
- [Running Sample Project](https://github.com/panaverse/learn-generative-ai/tree/main/05_microservices_all_in_one_platform/10_microservice_helloworld)