from groq import Groq
from app.core.config import settings

client = Groq(api_key=settings.GROQ_API_KEY)


class GroqService:

    def generate_answer(self, question, context):

        prompt = f"""
You are a helpful AI assistant.

Answer ONLY from the context below.

If the answer is not in the context, reply:

'I couldn't find that information in the uploaded documents.'

Context:

{context}

Question:

{question}
"""

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            temperature=0.2,
        )

        return response.choices[0].message.content


groq_service = GroqService()