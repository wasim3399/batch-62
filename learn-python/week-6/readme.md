# Version Control With GitHub and GitHub Desktop
[Getting started with GitHub Desktop](https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop)

[Getting started with GitHub Desktop](https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop "Github Desktop")

![Alt text](https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg "External Image")

## My List
* list 1
* list 2

# My Second List
* list 3
    * sub list 1

```DockerFile
# Use an official Python runtime as a parent image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Run app.py when the container launches
CMD ["python", "app.py"]
```

`What did you say?`

```
hello-world-app/
├── app.py
└── Dockerfile
```

## Additional Notes
* __Python Base Image:__ We are using `python:3.9-slim`, a ~~ligheetweight~~ lightweight Python image. You can choose different versions or variants based on your needs.
* _Work Directory:_ Setting the work directory with WORKDIR /app ensures that all subsequent commands are run in this directory inside the container.
- Copy Command: COPY . /app copies the contents of the current directory on your host into the /app directory in the container.
+ Command: CMD ["python", "app.py"] specifies the command to run the Python script when the container starts.

This simple example demonstrates the basic steps to create a containerized Python application. You can expand on this by adding more dependencies, handling environment variables, or integrating with other services.

- [x] Write the press release

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

```
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |
```

> blockquote

That is so funny! :joy: