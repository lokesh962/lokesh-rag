from typing import Optional

from fastapi import APIRouter, Header
from pydantic import BaseModel

from app.services.embedding_service import embedding_service
from app.services.qdrant_service import qdrant_service
from app.services.groq_service import groq_service

router = APIRouter()


class ChatRequest(BaseModel):
    question: str
    document_id: Optional[str] = None


@router.post("/")
def chat(
    data: ChatRequest,
    x_user_id: str = Header(...),
):

    question_embedding = embedding_service.embed(
        data.question
    )

    results = qdrant_service.search(
        query_vector=question_embedding,
        document_id=data.document_id,
        user_id=x_user_id,
    )

    context = ""

    for item in results:
        context += item.payload["chunk"] + "\n\n"

    if context.strip() == "":
        return {
            "answer": "I couldn't find any relevant information.",
            "sources": 0,
        }

    answer = groq_service.generate_answer(
        data.question,
        context,
    )

    return {
        "answer": answer,
        "sources": len(results),
    }