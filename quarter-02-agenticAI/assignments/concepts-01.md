# Open API Chat Completion API
## Concepts/Terms/Definitions

### Messages
A message is a core medium to communicate with the chat completion model. They mainly represent a conversation history b/w user and the model
- **Structure -** Used to perform sequential options step by step. Best for complex calculations
```json
[
  {"role": "system", "content": "You are a helpful assistant."},
  {"role": "user", "content": "What is the capital of France?"},
  {"role": "assistant", "content": "What is the capital of France?"}
]
```
### Models
Refers to the different AI models with varying cost, functions and capabilities.
- gpt-4
- gpt-3.5-turbo
### Max Completion Tokens ```max_tokens = 50```
Maximum number of tokens that model can generate in it's response. It helps to control the response length.
### n
It tells the model that how many responses to generate
```n = 3 will generate 3 different responses```
### Stream ```stream = true```
It is used to generate the response in chunks instead of having all the response at once.
### Temperature ```temperature = 1```
It is used to generate the varying response each time depending upon the temperature value. Value varies from 0 to 1.
### top_p
A parameter for 'nucleus sampling' that fine tunes the diversity of the output just like temperature.
```top_p = 1```: No restriction, the model considers all possible tokens.
```top_p = 0.9```: The model picks from the top 90% of token probabilities.
### Tools
Additional features that enchance the AI model capabilities by integrating external libraries or plugins.

