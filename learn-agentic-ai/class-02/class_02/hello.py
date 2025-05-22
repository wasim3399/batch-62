import os
from dotenv import load_dotenv, find_dotenv
import chainlit as cl

from agents import Agent, Runner, RunConfig, AsyncOpenAI, OpenAIChatCompletionsModel

# Load .env variables
load_dotenv(find_dotenv())

# Read Gemini API Key
gemini_api_key = os.getenv("GEMINI_API_KEY")

# Ensure key is loaded
if not gemini_api_key:
    raise Exception("GEMINI_API_KEY is missing from .env")

# Create OpenAI-compatible client for Gemini
external_client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

# Define the model
model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=external_client
)

# Create the agent
agent = Agent(
    name="Assistant",
    instructions="You are a helpful assistant.",
    model=model
)

# Run configuration
config = RunConfig(
    model=model,
    model_provider=external_client
)

# Chainlit message handler
@cl.on_message
async def main(message: cl.Message):
    try:
        result = await Runner.run(
            agent, 
            message.content, 
            run_config=config
            )

        await cl.Message(content=result.final_output).send()

    except Exception as e:
        import traceback
        traceback.print_exc()
        await cl.Message(content=f"❌ Exception occurred:\n{str(e)}").send()