import { Trash2 } from "lucide-react";

import UploadButton from "./UploadButton";
import { deleteDocument } from "../../api/documentApi";

export default function DocumentSidebar({
  documents,
  loading,
  refresh,
  selectedDocument,
  setSelectedDocument,
}) {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this document permanently?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDocument(id);

      if (selectedDocument?.id === id) {
        setSelectedDocument(null);
      }

      refresh();

      alert("Document deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Delete failed.");
    }
  };

  return (
    <div className="flex w-full shrink-0 flex-col border-b border-gray-700 bg-[#111827] md:w-80 md:border-b-0 md:border-r">
      <div className="border-b border-gray-700 p-4 sm:p-5">
        <h2 className="text-lg font-semibold text-white sm:text-xl">📂 Documents</h2>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto p-3">

        {loading ? (
          <p className="text-gray-400">
            Loading...
          </p>
        ) : (
          documents.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDocument(doc)}
              className={`mb-3 cursor-pointer rounded-xl p-4 transition ${
                selectedDocument?.id === doc.id
                  ? "bg-blue-600"
                  : "bg-[#1f2937] hover:bg-[#374151]"
              }`}
            >
              <div className="flex items-center justify-between">

                <p className="truncate text-white">
                  📄 {doc.filename}
                </p>

                <Trash2
                  size={18}
                  className="text-red-300 hover:text-red-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(doc.id);
                  }}
                />

              </div>
            </div>
          ))
        )}

      </div>

      <UploadButton refresh={refresh} />

    </div>
  );
}