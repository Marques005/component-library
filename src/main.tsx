import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PreviewApp } from "@/preview/preview-app";
import "@/styles/globals.css";

const root = document.getElementById("root");
if (!root) throw new Error("Preview root element was not found.");

createRoot(root).render(
  <StrictMode>
    <PreviewApp />
  </StrictMode>,
);
