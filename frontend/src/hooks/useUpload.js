import { useState } from "react";
import { uploadPDF } from "../api/uploadApi";

export default function useUpload() {

  const [loading, setLoading] = useState(false);

  const upload = async (file) => {

    try {

      setLoading(true);

      const response = await uploadPDF(file);

      return response;

    } finally {

      setLoading(false);

    }

  };

  return {
    upload,
    loading,
  };
}