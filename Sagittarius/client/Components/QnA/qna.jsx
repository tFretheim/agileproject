import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

// Function component for the QnA section
export function QnA() {
  // State variables for selected question and answer
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  // State variable to control the visibility of the answer box
  const [answerVisible, setAnswerVisible] = useState(false);
  // Hook for navigation
  const navigate = useNavigate();

  // Function to handle click on a question
  const handleQuestionClick = (question) => {
    // Set the selected question
    setSelectedQuestion(question);
    // Set the answer based on the selected question
    switch (question) {
      case "Where does my application form go?":
        setAnswer(
          "Your application form is processed by the recruitment section of the People Group. The initial selection of candidates is also made at this stage.",
        );
        break;
      case "How can I participate in the Graduate Recruitment Campaign and the Internship Program?":
        setAnswer(
          "To participate in the Graduate Recruitment Program or Internship Program, you need to register with the KPMG Recruitment System.",
        );
        break;
      case "What is the starting salary for university graduates at KPMG?":
        setAnswer(
          "The salary level offered to new employees at KPMG corresponds to the market level. You can obtain more information about the compensation system and benefits package during your first interview. Other sections of our website have information about the additional benefits of working for KPMG.",
        );
        break;
      case "What is the deadline for submitting documents?":
        setAnswer(
          'The deadline for applications depends on the specific program. Please refer to the information provided in the "Calendar of events" section of our website.',
        );
        break;
      default:
        // Clear answer if question is not recognized
        setAnswer("");
        break;
    }
    // Make the answer box visible
    setAnswerVisible(true);
  };

  // Function to handle click on "Contact Us" button
  const handleContactUsClick = () => {
    // Navigate to the contactUs page
    navigate("/contactUs");
  };

  return (
    <div className="container my-5">
      {/* Heading for the frequently asked questions */}
      <h1 className="text-center text-white">Frequently Asked Questions</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="list-group">
            {/* Mapping through the list of questions */}
            {[
              "Where does my application form go?",
              "How can I participate in the Graduate Recruitment Campaign and the Internship Program?",
              "What is the starting salary for university graduates at KPMG?",
              "What is the deadline for submitting documents?",
            ].map((question) => (
              <button
                key={question}
                className="list-group-item list-group-item-action"
                // Handle click on a question
                onClick={() => handleQuestionClick(question)}
                style={{
                  backgroundColor: "white",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "8px",
                  marginBottom: "5px",
                }}
                // Aria label for accessibility
                aria-label={question}
              >
                {/* Dash indicating the question */}
                <span
                  style={{
                    marginRight: "10px",
                  }}
                >
                  -
                </span>
                {question}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-8">
          {/* Answer box */}
          <div
            className="p-3"
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              minHeight: "276.5px", // Setting minHeight to make answer box match question height
              display: answerVisible ? "block" : "none", // Conditionally setting display property
            }}
          >
            {/* Display selected question and its answer */}
            <h4>{selectedQuestion}</h4>
            <p>{answer}</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        {/* Button to navigate to contactUs page */}
        <button
          className="btn btn-primary"
          onClick={handleContactUsClick}
          // Aria label for accessibility
          aria-label="Click here to contact us"
        >
          Click here to contact us
        </button>
      </div>
    </div>
  );
}
