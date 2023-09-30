import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Banner from "./Banner.jsx";
import Accordion from "./Accordion.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <App />
    <Accordion />
    <Footer />
  </React.StrictMode>
);
