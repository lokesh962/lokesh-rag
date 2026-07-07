import { useEffect, useState } from "react";
import { getDocuments } from "../api/documentApi";

export default function useDocuments() {

    const [documents, setDocuments] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDocuments();

    }, []);

    const loadDocuments = async () => {

        try {

            const data = await getDocuments();

            setDocuments(data);

        } finally {

            setLoading(false);

        }

    };

    return {

        documents,

        loading,

        refresh: loadDocuments,

    };

}