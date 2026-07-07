import { createContext, useContext, useEffect, useState } from "react";
import { getDocuments } from "../api/documentApi";

const DocumentContext = createContext();

export const DocumentProvider = ({ children }) => {

    const [documents, setDocuments] = useState([]);

    const [loading, setLoading] = useState(true);

    const loadDocuments = async () => {

        try {

            setLoading(true);

            const data = await getDocuments();

            setDocuments(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadDocuments();

    }, []);

    return (

        <DocumentContext.Provider

            value={{

                documents,

                loading,

                refreshDocuments: loadDocuments,

            }}

        >

            {children}

        </DocumentContext.Provider>

    );

};

export const useDocuments = () => useContext(DocumentContext);