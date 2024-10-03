# Certified Cloud Applied Generative AI Engineer - Batch 62

## Important Topics To Cover
- Github account creation & IDE
- [Promot Engineering](https://learn.deeplearning.ai/courses/chatgpt-prompt-eng/lesson/1/introduction)
- Inversion of control

### CPU/GPU/APU/NPU

- **CPU -** Used to perform sequential options step by step. Best for complex calculations
- **GPU -** Used to perform parallel processing. Best for scientific simulations and AI trainings. GPU is used for training
- **APU -** Combination of CPU & GPU where both are encapsulated in a single chip. Best for building cost effective and energy efficient solutions specifically designed for laptops and compact desktops
- **NPU -** Alternatively used with APU. Mainly used for inference

### Neural Networks
A neural network in AI is like a digital brain made up of many interconnected nodes, or "neurons," that work together to process information. Here's a simple breakdown:

- **Neurons -** Each neuron receives input, processes it, and passes it on to the next layer of neurons.
- **Layers -** Neurons are arranged in layers. The first layer (input layer) receives raw data, middle layers (hidden layers) process the data, and the last layer (output layer) produces the final result.
- **Learning -** The network learns by adjusting the connections (weights) between neurons based on the data it processes. This helps it improve at tasks over time, like recognizing images or understanding speech.
- **Training -** Neural networks are trained using large datasets. During training, the network makes predictions, compares them to correct answers, and adjusts itself to reduce errors.


## Learning Python

## [Panaverse](https://www.youtube.com/playlist?list=PL0vKVrkG4hWrEujmnC7v2mSiaXMV_Tfu0)

### Class 1: Installation and Setting Up Environments
- **Interpreter vs Transpiler vs Compiler**:  
  - Interpreter means line by line execution.
- **Google Colab** for online coding.
- **Virtual environment setup**:
  ```bash
  conda create -n python12 (could be any name) python==3.12 -y
  conda activate python12
  pip install -r requirements.txt

- **Jupyter Notebook Console Commands**:
  ```bash
  !pip install mypy
  %pip install mypy

### Class 2: String Methods

### Class 3: Operators - (PEMDAS Rule)

### Class 4: List Methods

### Class 5  Jupyter Notebook (List Comprehensive & Tuples)

### Class 6  (if else - tuple - zip)

### Class 7  (Dictionary - Set - Tuple - Dictionary Comprehensive)

### Class 8 (Dictionary Methods - JSON - Jsonify - Dataframes)

### Class 9 (Loop - Input - Iterative Type - Sys Argv)

### Class 10 (Functions - Lambda Functions - *arg - **arg - decorators - recursive - generators)

### Class 11 (try - except - else - finally - call by reference - call by value)

### Class 12 (File Handling)

### Class 13-15 - OOP

### Class 16 - Numpy

### Class 17-19 - Pandas

## [Python By Microsoft](https://www.youtube.com/playlist?list=PLlrxD0HtieHhS8VzuMCfQD4uJ9yne1mE6)

## [Python Crash Course](https://www.youtube.com/watch?v=f79MRyMsjrQ)

- Extensions
    -pylint (command+shift+M)
    - autopep8 for document formatting
    - code runner (control+alt+n) to run file
    - mypy is used to check type annotations (throw error and support static type - refer to point e)
- command pallet (command+shift+P) for setting up environments
- python peps - 8 style guide
- static type vs dynamic type
    - static - we define types
    - dynamic - auto assign on run time instead of compile time (type of variables is determined at run time)
- primitive types are immutable while reference types are mutable
    - Check with id function by defining a variable
- local and global variable and their scope
- debugging with VSCode
- for unlimited parameters passing to a function, add * with parameter name and python will treat this argument as tuple.

## Online Lectures
### [Generative AI](https://www.youtube.com/live/6-W9mY-t430)
- Steps Covered
    - -01_prologue
    - 00_what_is_generative_ai
    - 01_applied_generative_ai
    - 02_what_is_a_gpu


- Topics Covered
    - ROS (robot operating system)
    - https://figure.ai
    - https://github.com/panaversity
    - Generative AI (that can generate something like images or text)
    - Applied Generative AI (with the help of existing LLMs, create something for the end user with custom requirements)
    - Fine tuning (to tell something new or improve existing)
    - ChatGPT (this is closed source)
    - Lama3 (this is open source)
    - Training - to train the modals
    - Inference - to get answers from learned modals
    - x-86 vs ARM processors

### [Cloud - Kubernetes Overview](https://www.youtube.com/live/PGHey9ep7PA)
- Steps Covered
    - 02b_tsmc
    - 03_agi
    - 04_ai_stacks
    - 05_agentic_future
    - 06_next_wave_humaniods
    - 07_ai_pcs
    - 08_cloud_and_edge
    - 09_nvidia_cloud_gpus
    - 10_ai_and_microservices
    - 11_cloudnative
    - 12_economics_of_ai
    - 13_nvidia_nim

- Topics Covered
    - Cloudflare
    - Serverless
    - https://excalidraw.com
    - Kubernetes -> Containers -> Applications
    - Cluster = Server = Engine
    - Physical AI
    - Agentic Frameworks
        - CrewAI
        - LangGraph
    - Kubernetes Servers
        - GKE (Google Kubernetes Server)
        - AWS - EKS (Elastic Kubernetes Server)
        - Microsoft Azure - AKS (Azure Kubernetes Server)
        - Kubernetes Cluster oON Premises
    - Serverless Servers
        - Google Cloud Run 
        - ACA (Azure Container App)
        - Azure Container Instances
            - EKS Forgate
        - GKE Autopilot
        - AWS Karpenter


attach image

### [Chat GPT - Promot Engineering](https://www.youtube.com/watch?v=Fp0pGw1d__s)

### [Full Stack TODO App](https://www.youtube.com/playlist?list=PLxYHe2aLO4DCzc0QYT3ysH9BApFwmkKYT)

## Docker In Details
### [Docker Introduction](https://www.youtube.com/watch?v=2byRrhPbc7U)
### [Docker Complete Series](https://www.youtube.com/watch?v=eRbtrOIIP3k&list=PL0vKVrkG4hWoTh2SaepYf9N8ywxz_Cyfx)

## Linux
### [Linux Introduction](https://www.youtube.com/watch?v=LofvhMIOrus) 
- Topics Covered
    - AI Compound Systems
    - 04_linux
    - 05_linux_containers


- Commands:
    - pwd (present working directory)
    - root is for root user
    - For super admin (cd root and do your work)
    - For sub user (cd home and then create user(directory) and do your work)
    - ~ shows you are at your home
    - ```> redirect and overwrite```
    - ```>> append```
    - ```2> for error```
    - GNOME for linux to have GUI
    - ls -l for detailed information
    - We can cat multiple files in the same command and it will concatenate the content of the provided files

### [Linux Containers](https://www.youtube.com/watch?v=crPapeVBjvU)
- Topics Covered
    - 05_linux_containers

- Commands:
    - docker images
    - docker images -a
    - docker image -ls
    - docker container ls
    - docker container ls -a
    - docker ps
    - docker ps -a
    - ctr+c
    - exit
    - ctr+p+q
    - docker run ubuntu -it - -rm /bin/bash
    - docker start container_name
    - docker stop container_name
    - docker exec -it container_name /bash
    - docker rm container_name
    - docker kill container_name
    - signals in linux

### [Github & Markdown](https://www.youtube.com/watch?v=R7CNbiev2w8)

### Google Colab
- [Lecture 1](https://www.youtube.com/watch?v=mdLA7rSwuSw)
- [Lecture 2](https://www.youtube.com/watch?v=We9gBPFYswM)
- [Lecture 3](https://www.youtube.com/watch?v=WIRB8NB3YCQ)
- [Lecture 4](https://www.youtube.com/watch?v=WkqEW3ZINwU)

- Topics Covered
    - 07-natural_language_programming

- Commands:
    - ctr + enter
    - command + enter
    - shift + enter
    - ctr + / to comment or uncomment


## [Fast API](https://www.youtube.com/watch?v=Y_eRMGaTMo4&list=PLlD4HFUxnECvSbTUzOaX93EZwHBfl33NZ)

## [Cloud Engineering](https://www.youtube.com/watch?v=1TzpNX4NRjI&list=PL0vKVrkG4hWrqwmlQ6k8ArJ93BrwX6V4l)

## [Generative AI Playlist](https://www.youtube.com/watch?v=FwARACe8M_4&list=PL0vKVrkG4hWoulA3tVDU3PoCalDm6I_eh)





