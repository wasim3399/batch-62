import os
from dotenv import load_dotenv, find_dotenv
import chainlit as cl

# OpenAI Agent SDK imports
from agents import Agent, Runner, RunConfig, AsyncOpenAI, OpenAIChatCompletionsModel

# ===============================
# 🌱 Environment Setup
# ===============================
# Load environment variables from .env file
load_dotenv(find_dotenv())

# Fetch the Gemini API key from environment
gemini_api_key = os.getenv("GEMINI_API_KEY")
if not gemini_api_key:
    raise Exception("❌ GEMINI_API_KEY is missing from .env")

# ===============================
# ⚙️ OpenAI-Compatible Gemini Client
# ===============================
# Initialize AsyncOpenAI with Gemini-compatible endpoint
external_client = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

# ===============================
# 🧠 Model & Agent Configuration
# ===============================
# Define Gemini model wrapper
model = OpenAIChatCompletionsModel(
    model="gemini-2.0-flash",
    openai_client=external_client
)

# Create Agent instance
agent = Agent(
    name="Assistant",
    instructions="You are a helpful assistant.",
    model=model
)

# Define run configuration (includes model & tracing)
config = RunConfig(
    model=model,
    model_provider=external_client
)

# ===============================
# 💬 Chat Session Start
# ===============================
@cl.on_chat_start
async def handle_chat_start():
    # Initialize empty chat history in user session
    cl.user_session.set("history", [])

    # Greet user
    await cl.Message(content="👋 Hello! I'm your AI assistant. How can I help you today?").send()

# ===============================
# 📩 Message Handler
# ===============================
@cl.on_message
async def main(message: cl.Message):
    # Retrieve conversation history from user session
    history = cl.user_session.get("history")

    # Append user's new message to history
    history.append({"role": "user", "content": message.content})

    try:
        # Run the agent with full history (context-aware)
        result = await Runner.run(
            agent, 
            # message.content, 
            input=history,        # Pass the full history as input
            run_config=config
        )

        # Append agent's response to the history
        history.append({"role": "assistant", "content": result.final_output})

        # Update session with new history
        cl.user_session.set("history", history)

        # Send the agent's response back to the UI
        await cl.Message(content=result.final_output).send()

    except Exception as e:
        # Log and display any errors during processing
        import traceback
        traceback.print_exc()
        await cl.Message(content=f"❌ Exception occurred:\n{str(e)}").send()
