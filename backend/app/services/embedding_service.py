import requests
from app.core.config import settings


MODEL = "BAAI/bge-small-en-v1.5"


class EmbeddingService:

    def __init__(self):
        self.url = f"https://router.huggingface.co/hf-inference/models/{MODEL}"

        self.headers = {
            "Authorization": f"Bearer {settings.HF_API_KEY}",
            "Content-Type": "application/json",
        }

        print("✅ Hugging Face Embedding API Ready")

    def embed(self, text: str):

        response = requests.post(
            self.url,
            headers=self.headers,
            json={
                "inputs": text
            },
            timeout=60,
        )

        response.raise_for_status()

        embedding = response.json()

        return embedding

    def embed_chunks(self, chunks):

        embeddings = []

        for chunk in chunks:

            embeddings.append(
                self.embed(chunk)
            )

        return embeddings


embedding_service = EmbeddingService()