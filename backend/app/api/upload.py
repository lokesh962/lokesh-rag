from fastapi import APIRouter, UploadFile, File, HTTPException, Header

from app.services.storage import storage_service
from app.services.pdf_service import pdf_service
from app.services.chunk_service import chunk_service
from app.services.embedding_service import embedding_service
from app.services.qdrant_service import qdrant_service
from app.services.document_service import document_service

router = APIRouter()


@router.post("/")
async def upload_pdf(
    file: UploadFile = File(...),
    x_user_id: str = Header(...),
):

    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    contents = await file.read()

    # Extract text
    text = pdf_service.extract_text(contents)

    chunks = chunk_service.chunk_text(text)

    embeddings = embedding_service.embed_chunks(chunks)

    user_id = x_user_id

    # Upload PDF
    storage_result = storage_service.upload_pdf(
        user_id=user_id,
        file_name=file.filename,
        file_bytes=contents,
    )

    # Save metadata
    document = document_service.create_document(
        user_id=user_id,
        filename=file.filename,
        storage_path=storage_result["path"],
    )

    # Store vectors
    qdrant_service.store_embeddings(
        chunks=chunks,
        embeddings=embeddings,
        document_id=document["id"],
        user_id=user_id,
        filename=file.filename,
        storage_path=storage_result["path"],
    )

    return {
        "success": True,
        "document": document,
        "chunks": len(chunks),
        "embedding_dimension": len(embeddings[0]),
    }