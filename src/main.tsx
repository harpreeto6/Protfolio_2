import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const RESUME_PDF_URL = `${import.meta.env.BASE_URL}Harpreet_Singh_Resume.pdf`;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <a
      href={RESUME_PDF_URL}
      download="Harpreet_Singh_Resume.pdf"
    >
      Download My Resume
    </a>
  </React.StrictMode>
);
