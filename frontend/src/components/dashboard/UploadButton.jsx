import { useRef } from "react";
import useUpload from "../../hooks/useUpload";

export default function UploadButton({ refresh }) {
  const inputRef = useRef();

  const { upload, loading } = useUpload();

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      await upload(file);

      // Refresh document list immediately
      await refresh();

      alert("PDF uploaded successfully!");

      e.target.value = "";
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="p-5">

      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={handleUpload}
      />

      <button
        onClick={() => inputRef.current.click()}
        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white transition hover:scale-105"
      >
        {loading ? "Uploading..." : "+ Upload PDF"}
      </button>

    </div>
  );
}