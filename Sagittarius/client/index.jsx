import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Application } from "./Application/application";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PageHeader from "./Components/shared/PageHeader";
import "./index.css";
import PageFooter from "./Components/shared/PageFooter";

const AppWrapper = () => {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/";

  return (
    <>
      <div className="app-container">
        {!isLoginPage && <PageHeader />}
        <main>
          <Application />
        </main>
        {!isLoginPage && <PageFooter />}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AppWrapper />
  </BrowserRouter>,
);
