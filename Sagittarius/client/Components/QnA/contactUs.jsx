// Importing necessary modules and styles
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BackButton from '../shared/BackButton';

// Function component for the ContactUs page
export function ContactUs() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();
    // Routing back to FaQ when clicked
    window.location.href = "/qna";
  };

  return (
      <div className="container my-5">
        <BackButton />
        {/* Heading for the contact us page */}
        <h1 className="text-center text-white">Contact Us</h1>
        {/* Instruction message */}
        <p className="text-center text-white">
          Any question or remarks? Just write us a message!
        </p>
        <div className="row">
          <div className="col-md-4">
            {/* Contact information section */}
            <div
              className="p-3"
              style={{
                backgroundColor: "#0056b3",
                color: "white",
                borderRadius: "8px",
              }}
            >
              <h4>Contact Information</h4>
              <p>Send a message and we'll get back to you as soon as we can!</p>
              <p>
                <i className="bi bi-telephone"></i> +47 45 40 40 63
              </p>
              <p>
                <i className="bi bi-envelope"></i> contact@kpmg.no
              </p>
              <p>
                <i className="bi bi-geo-alt"></i> Sørkedalsveien 6 Oslo 0369
              </p>
            </div>
          </div>
        <div className="col-md-8">
          {/* Form section for sending message */}
          <div
            className="p-3"
            style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}
          >
            {/* Form for user input */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" id="lastName" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
              {/* Button to submit the form */}
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
  );
}
