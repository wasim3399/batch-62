from starlette.config import Config
from starlette.datastructures import Secret

try:
    confg = Config(".env")
except FileNotFoundError:
    confg = Config()

DATABASE_URL = confg("DATABASE_URL", cast=Secret)