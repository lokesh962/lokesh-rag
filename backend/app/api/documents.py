from fastapi import APIRouter, HTTPException, Header

from app.services.document_service import document_service
from app.services.storage import storage_service
from app.services.qdrant_service import qdrant_service

router = APIRouter()


@router.get("/")
def get_documents(
    x_user_id: str = Header(...),
):

    documents = document_service.get_documents(
        x_user_id
    )

    return documents


@router.delete("/{document_id}")
def delete_document(
    document_id: str,
    x_user_id: str = Header(...),
):

    document = document_service.get_document(
        document_id
    )

    if not document:
        raise HTTPException(
            status_code=404,
            detail="Document not found."
        )

    # Prevent deleting another user's file
    if document["user_id"] != x_user_id:
        raise HTTPException(
            status_code=403,
            detail="Access denied."
        )

    storage_service.delete_pdf(
        document["storage_path"]
    )

    qdrant_service.delete_document_vectors(
        document_id
    )

    document_service.delete_document(
        document_id
    )

    return {
        "success": True,
        "message": "Document deleted successfully.",
    }