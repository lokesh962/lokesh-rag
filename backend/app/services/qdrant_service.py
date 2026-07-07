from qdrant_client import QdrantClient
from qdrant_client.models import (
    Distance,
    VectorParams,
    PointStruct,
    Filter,
    FieldCondition,
    MatchValue,
    PayloadSchemaType,
)

from app.core.config import settings
import uuid

COLLECTION_NAME = "documind"

client = QdrantClient(
    url=settings.QDRANT_URL,
    api_key=settings.QDRANT_API_KEY,
)


class QdrantService:

    def create_collection(self):

        collections = client.get_collections().collections
        names = [c.name for c in collections]

        # Create collection if it doesn't exist
        if COLLECTION_NAME not in names:

            client.create_collection(
                collection_name=COLLECTION_NAME,
                vectors_config=VectorParams(
                    size=384,
                    distance=Distance.COSINE,
                ),
            )

        # Create payload indexes
        try:
            client.create_payload_index(
                collection_name=COLLECTION_NAME,
                field_name="document_id",
                field_schema=PayloadSchemaType.KEYWORD,
            )
        except Exception:
            pass

        try:
            client.create_payload_index(
                collection_name=COLLECTION_NAME,
                field_name="user_id",
                field_schema=PayloadSchemaType.KEYWORD,
            )
        except Exception:
            pass

        print("✅ Qdrant collection ready.")

    def store_embeddings(
        self,
        chunks,
        embeddings,
        document_id,
        user_id,
        filename,
        storage_path,
    ):

        points = []

        for i, (chunk, vector) in enumerate(zip(chunks, embeddings)):

            points.append(
                PointStruct(
                    id=str(uuid.uuid4()),
                    vector=vector,
                    payload={
                        "document_id": document_id,
                        "user_id": user_id,
                        "filename": filename,
                        "storage_path": storage_path,
                        "chunk": chunk,
                        "chunk_index": i,
                    },
                )
            )

        client.upsert(
            collection_name=COLLECTION_NAME,
            points=points,
        )

        print("✅ Embeddings stored.")

    def search(
        self,
        query_vector,
        user_id,
        document_id=None,
        limit=5,
    ):
        """
        Search vectors.

        If document_id is None:
            Search ALL documents belonging to the current user.

        Otherwise:
            Search ONLY the selected document belonging to the current user.
        """

        filters = [
            FieldCondition(
                key="user_id",
                match=MatchValue(
                    value=user_id,
                ),
            )
        ]

        if document_id:

            filters.append(
                FieldCondition(
                    key="document_id",
                    match=MatchValue(
                        value=document_id,
                    ),
                )
            )

        results = client.query_points(
            collection_name=COLLECTION_NAME,
            query=query_vector,
            query_filter=Filter(
                must=filters,
            ),
            limit=limit,
        )

        return results.points

    def delete_document_vectors(
        self,
        document_id: str,
    ):

        client.delete(
            collection_name=COLLECTION_NAME,
            points_selector=Filter(
                must=[
                    FieldCondition(
                        key="document_id",
                        match=MatchValue(
                            value=document_id,
                        ),
                    )
                ]
            ),
        )

        print(f"✅ Deleted vectors for {document_id}")


qdrant_service = QdrantService()

# Automatically create collection and indexes
qdrant_service.create_collection()