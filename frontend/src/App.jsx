import { useEffect } from "react";
import axios from "axios";

import AppRoutes from "./routes/AppRoutes";

function App() {

  useEffect(() => {

    axios
      .get("https://lokesh-rag-1.onrender.com/health")
      .then(() => {
        console.log("✅ Backend is awake");
      })
      .catch((err) => {
        console.log("Backend wake-up failed:", err);
      });

  }, []);

  return <AppRoutes />;
}

export default App;