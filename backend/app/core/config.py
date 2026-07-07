from dotenv import load_dotenv
import os

load_dotenv()


class Settings:

    GROQ_API_KEY = os.getenv("GROQ_API_KEY")

    QDRANT_URL = os.getenv("QDRANT_URL")
    QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

    SUPABASE_URL = os.getenv("SUPABASE_URL")
    SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY")
    HF_API_KEY = os.getenv("HF_API_KEY")

    FIREBASE_PROJECT_ID = os.getenv("FIREBASE_PROJECT_ID")


settings = Settings()