from io import BytesIO

from pypdf import PdfReader


class PDFService:

    def extract_text(
        self,
        pdf_bytes: bytes,
    ):

        reader = PdfReader(
            BytesIO(pdf_bytes)
        )

        text = ""

        for page in reader.pages:

            page_text = page.extract_text()

            if page_text:

                text += page_text + "\n"

        return text


pdf_service = PDFService()