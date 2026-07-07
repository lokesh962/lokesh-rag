from app.services.storage import supabase


class DocumentService:

    def create_document(
        self,
        user_id: str,
        filename: str,
        storage_path: str,
    ):
        data = {
            "user_id": user_id,
            "filename": filename,
            "storage_path": storage_path,
        }

        result = (
            supabase.table("documents")
            .insert(data)
            .execute()
        )

        # Return the inserted row
        return result.data[0]

    def get_documents(
        self,
        user_id: str,
    ):
        result = (
            supabase.table("documents")
            .select("*")
            .eq("user_id", user_id)
            .order("uploaded_at", desc=True)
            .execute()
        )

        return result.data

    def get_document(
        self,
        document_id: str,
    ):
        result = (
            supabase.table("documents")
            .select("*")
            .eq("id", document_id)
            .single()
            .execute()
        )

        return result.data

    def delete_document(
        self,
        document_id: str,
    ):
        result = (
            supabase.table("documents")
            .delete()
            .eq("id", document_id)
            .execute()
        )

        return result.data


document_service = DocumentService()