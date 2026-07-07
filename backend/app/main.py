from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.health import router as health_router
from app.api.upload import router as upload_router
from app.api.chat import router as chat_router
from app.api.documents import router as document_router

from app.services.qdrant_service import qdrant_service


app = FastAPI(
    title="Lexora AI API",
    version="1.0.0",
)


@app.on_event("startup")
async def startup():
    # Ensure collection & indexes exist
    qdrant_service.create_collection()


# ---------- CORS ----------

origins = [
    "http://localhost:5173",
    "https://documind-d3a0a.web.app",
    "https://lokesh-rag.web.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------- Routers ----------

app.include_router(
    health_router,
    prefix="/health",
    tags=["Health"],
)

app.include_router(
    upload_router,
    prefix="/upload",
    tags=["Upload"],
)

app.include_router(
    chat_router,
    prefix="/chat",
    tags=["Chat"],
)

app.include_router(
    document_router,
    prefix="/documents",
    tags=["Documents"],
)


# ---------- Root ----------

@app.get("/")
def root():

    return {
        "success": True,
        "application": "Lexora AI",
        "status": "Running",
        "version": "1.0.0",
    }