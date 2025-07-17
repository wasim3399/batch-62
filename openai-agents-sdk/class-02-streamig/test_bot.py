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

def main():
    prompt = input("Enter your prompt (default: 'Hello, how are you.'): ") or "Hello, how are you."
    agent = Agent(name="Assistant", instructions="You are a helpful assistant", model=model)
    result = Runner.run_sync(agent, prompt, run_config=config)
    print("\nAgent Response:\n")
    print(result.final_output)

if __name__ == "__main__":
    main() 