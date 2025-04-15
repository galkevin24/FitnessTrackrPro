import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./layout/Layout";

import { BrowserRouter } from "react-router";

import { AuthProvider } from "./auth/AuthContext";
import { ApiProvider } from "./api/ApiContext";


createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ApiProvider>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </ApiProvider>
  </AuthProvider>,
);
