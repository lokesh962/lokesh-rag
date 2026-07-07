from supabase import create_client
from app.core.config import settings
import uuid

supabase = create_client(
    settings.SUPABASE_URL,
    settings.SUPABASE_SERVICE_KEY
)

BUCKET_NAME = "documents"


class StorageService:

    def upload_pdf(
        self,
        user_id: str,
        file_name: str,
        file_bytes: bytes,
        content_type: str = "application/pdf",
    ):

        unique_name = f"{uuid.uuid4()}_{file_name}"

        path = f"{user_id}/{unique_name}"

        print("Bucket:", BUCKET_NAME)

        supabase.storage.from_(BUCKET_NAME).upload(
            path=path,
            file=file_bytes,
            file_options={
                "content-type": content_type
            }
        )

        return {
            "path": path,
            "filename": unique_name,
        }

    def delete_pdf(
        self,
        storage_path: str,
    ):
        """
        Delete a PDF from the Supabase Storage bucket.
        storage_path example:
        demo-user/8d12ab34_resume.pdf
        """

        supabase.storage.from_(BUCKET_NAME).remove(
            [storage_path]
        )

        print(f"Deleted PDF: {storage_path}")


storage_service = StorageService()