from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def health():
    return {
        "status": "ok",
        "message": "Backend is running"
    }


from app.services.storage import supabase

@router.get("/buckets")
def buckets():
    return supabase.storage.list_buckets()