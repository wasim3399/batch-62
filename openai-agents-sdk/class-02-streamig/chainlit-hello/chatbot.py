import chainlit as cl

import os
from dotenv import load_dotenv
import logging
from agents import Agent, Runner, AsyncOpenAI, OpenAIChatCompletionsModel, enable_verbose_stdout_logging
from agents.run import RunConfig

# Enable verbose logging if needed (optional)
# enable_verbose_stdout_logging()

# Load environment variables from .env file
load_dotenv()

gemini_api_key = os.getenv("GEMINI_API_KEY")
if not gemini_api_key:
    raise ValueError("GEMINI_API_KEY is not set. Please ensure it is defined in your .env file.")

# Reference: https://ai.google.dev/gemini-api/docs/openai
external_client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=external_client
)

config = RunConfig(
    model=model,
    model_provider=external_client,
    tracing_disabled=True
)

logging.getLogger("openai.agents").setLevel(logging.WARNING)

@cl.on_chat_start
async def on_chat_start():
    cl.user_session.set("history", [])
    await cl.Message(content="Hello, how can I help you today?").send()

@cl.on_message
async def on_message(message: cl.Message):
    # History uthao ya empty list lo
    history = cl.user_session.get("history") or []
    # Naya user message ko history mein daalo
    history.append({"role": "user", "content": message.content})

    # Agent ko pura history bhejo
    agent = Agent(
        name="Assistant",
        instructions="You are a helpful assistant",
        model=model
    )

    # Messages ko ek string bana ke agent ko bhej rahe hain
    conversation = ""
    for msg in history:
        if msg["role"] == "user":
            conversation += f"User: {msg['content']}\n"
        else:
            conversation += f"Assistant: {msg['content']}\n"

    result = Runner.run_sync(agent, conversation, run_config=config)

    # Assistant ka response bhi history mein daalo
    history.append({"role": "assistant", "content": result.final_output})
    cl.user_session.set("history", history)

    await cl.Message(content=result.final_output).send()