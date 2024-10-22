import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PageFooter = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 d-flex flex-column flex-md-row">
            <a href="#" className="text-white mr-3 mb-2 mb-md-0">
              Legal
            </a>
            <a href="#" className="text-white mr-3 mb-2 mb-md-0">
              Privacy
            </a>
            <a href="#" className="text-white mr-3 mb-2 mb-md-0">
              Accessibility
            </a>
            <a href="#" className="text-white mr-3 mb-2 mb-md-0">
              Sitemap
            </a>
            <a href="#" className="text-white mr-3 mb-2 mb-md-0">
              Help
            </a>
            <a href="#" className="text-white mr-3 mb-2 mb-md-0">
              Glossary
            </a>
            <a href="#" className="text-white">
              Manage Choices
            </a>
          </div>
          <div className="col-md-4 d-flex justify-content-md-end">
            <a
              href="https://www.linkedin.com/company/kpmg/?originalSubdomain=no"
              className="text-white mr-3"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/kpmg" className="text-white mr-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/kpmg/"
              className="text-white mr-3"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/KPMG/" className="text-white">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
