import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BackButton from '../shared/BackButton';

function MultipleChoiceQuiz({ questions, onComplete }) {
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null),
  );

  const handleAnswerSelect = (index, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Checks if all questions are answered by the user
    if (selectedAnswers.every((answer) => answer !== null)) {
      // Check the answers
      const isCorrect = selectedAnswers.every(
        (answer, index) => answer === questions[index].correctAnswer,
      );
      onComplete(isCorrect);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <p>{question.text}</p>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={`question-${index}`}
                id={`question-${index}-option-${optionIndex}`}
                checked={selectedAnswers[index] === optionIndex}
                onChange={() => handleAnswerSelect(index, optionIndex)}
              />
              <label
                className="form-check-label"
                htmlFor={`question-${index}-option-${optionIndex}`}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export function Introduction() {
  const [section, setSection] = useState("Introduction Video");
  const [content, setContent] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [readContent, setReadContent] = useState(false); // Track to se whether the content is read by the user
  const [quizResult, setQuizResult] = useState(null); // Tracks the quiz result
  const [completedSections, setCompletedSections] = useState({}); // Tracks the completed sections

  useEffect(() => {
    if (section === "Introduction Video") {
      setContent("https://www.youtube.com/embed/lQtip6_rczA"); // URL for Introduction video
    } else {
      fetchContent(section);
    }
    setReadContent(false); // Reset read content state when changing sections
    setQuizCompleted(false); // Reset quiz completed state when changing sections
    setQuizResult(null); // Reset quiz result state when changing sections
  }, [section]);

  async function fetchContent(section) {
    try {
      // Fetching form db
      const res = await fetch(`/api/content/${encodeURIComponent(section)}`, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch: " + res.statusText);
      }

      const data = await res.json();
      setContent(data.content);
    } catch (error) {
      console.error("Error:", error);
      setContent("Failed to load content");
    }
  }

  // Handling quiz events
  const handleQuizComplete = (isCorrect) => {
    setQuizCompleted(true);
    setQuizResult(
      isCorrect
        ? "Correct! You can now proceed to the next section."
        : "Incorrect! Please try again.",
    );
    if (isCorrect) {
      setCompletedSections({ ...completedSections, [section]: true });
    }
  };

  const handleRetryQuiz = () => {
    setQuizCompleted(false);
    setQuizResult(null);
  };

  const handleProceed = () => {
    const sections = [
      "Introduction Video",
      "Organisational Structure",
      "Corporate Culture and Values",
      "Key Services and Clients",
      "Learning and Improvement",
      "Leadership Team",
    ];
    const currentIndex = sections.indexOf(section);
    const nextSection = sections[currentIndex + 1];
    setSection(nextSection);
  };

  const handleFinishTraining = () => {
    window.location.href = "/training";
  };

  const quizzes = {
    "Organisational Structure": {
      questions: [
        {
          text: "Question 1: What is the hierarchical structure of our organization?",
          options: ["Pyramid (correct)", "Square", "Circle"],
          correctAnswer: 0, // Correct answer form the array
        },
        {
          text: "Question 2: How many departments do we have?",
          options: ["16 (correct)", "3", "72"],
          correctAnswer: 0,
        },
        // Can add more questions here
      ],
    },
    "Corporate Culture and Values": {
      questions: [
        {
          text: "What are the core values at the heart of KPMG's corporate culture?",
          options: [
            "Marketing, sales, and customer service",
            "Profitability, competitiveness, and market dominance",
            "Integrity, excellence, and inclusion (Correct)",
          ],
          correctAnswer: 2,
        },
        {
          text: "Why does KPMG emphasize diversity and inclusion?",
          options: [
            "Because varied perspectives drive innovation and better decision-making (Correct)",
            "To reduce operational costs and increase profitability",
            "To standardize processes and streamline workflows",
          ],
          correctAnswer: 0,
        },
      ],
    },
    "Key Services and Clients": {
      questions: [
        {
          text: "Question 1: What are the key services provided by KPMG??",
          options: [
            "Audit, Tax, and Advisory (Correct)",
            "Marketing, Sales, and IT Support",
            "Human Resources, Legal, and Procurement",
          ],
          correctAnswer: 0,
        },
        {
          text: "Question 2: What do KPMG's Advisory services primarily focus on?",
          options: [
            "Risk management, transactions, and business transformation (Correct)",
            "Customer service, marketing campaigns, and sales strategy",
            "Office management, recruitment, and payroll processing",
          ],
          correctAnswer: 0,
        },
      ],
    },
    "Learning and Improvement": {
      questions: [
        {
          text: "What does KPMG's commitment to continuous learning and improvement include?",
          options: [
            "Free gym memberships, vacation packages, and meal plans",
            "Training programs, professional development workshops, and e-learning platforms (Correct)",
            "Marketing campaigns, social media training, and sales strategy workshops",
          ],
          correctAnswer: 1,
        },
        {
          text: "How does KPMG's feedback culture contribute to employee growth?",
          options: [
            "By offering monthly bonuses and incentives for punctuality",
            "By organizing team-building sports events and social gatherings",
            "By promoting regular performance reviews and constructive feedback (Correct)",
          ],
          correctAnswer: 2,
        },
      ],
    },
    "Leadership Team": {
      questions: [
        {
          text: "Who oversees KPMG's direction and global strategy?",
          options: [
            "Department Heads",
            "Regional Managers",
            "Global Chairman and CEO (Correct)",
          ],
          correctAnswer: 2,
        },
        {
          text: "What values do KPMG's leadership team embody?",
          options: [
            "Integrity, excellence, and collaboration (Correct)",
            "Innovation, profitability, and competitiveness",
            "Marketing, sales, and customer service",
          ],
          correctAnswer: 0,
        },
      ],
    },
  };

  // Fetching from db, retrieving data based on selected section
  // As well as general styling
  return (
    <div className="container-fluid p-3 text-white">
      <BackButton/>
      <div className="row">
        <div className="col-md-3">
          <h2 className="mb-4 exciting-heading-introduction">
            Training: Introduction
          </h2>
          <div className="list-group mb-4">
            <button
              className={`list-group-item list-group-item-action ${section === "Introduction Video" ? "active" : ""}`}
              onClick={() => setSection("Introduction Video")}
              disabled={
                section !== "Introduction Video" &&
                !completedSections["Introduction Video"]
              }
            >
              Introduction Video
            </button>
            <button
              className={`list-group-item list-group-item-action ${section === "Organisational Structure" ? "active" : ""}`}
              onClick={() => setSection("Organisational Structure")}
              disabled={
                !completedSections["Introduction Video"] &&
                section !== "Introduction Video"
              }
            >
              Organisational Structure
            </button>
            <button
              className={`list-group-item list-group-item-action ${section === "Corporate Culture and Values" ? "active" : ""}`}
              onClick={() => setSection("Corporate Culture and Values")}
              disabled={!completedSections["Organisational Structure"]}
            >
              Corporate Culture and Values
            </button>
            <button
              className={`list-group-item list-group-item-action ${section === "Key Services and Clients" ? "active" : ""}`}
              onClick={() => setSection("Key Services and Clients")}
              disabled={!completedSections["Corporate Culture and Values"]}
            >
              Key Services and Clients
            </button>
            <button
              className={`list-group-item list-group-item-action ${section === "Learning and Improvement" ? "active" : ""}`}
              onClick={() => setSection("Learning and Improvement")}
              disabled={!completedSections["Key Services and Clients"]}
            >
              Learning and Improvement
            </button>
            <button
              className={`list-group-item list-group-item-action ${section === "Leadership Team" ? "active" : ""}`}
              onClick={() => setSection("Leadership Team")}
              disabled={!completedSections["Learning and Improvement"]}
            >
              Leadership Team
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <div className="content-display-introduction">
            {section === "Introduction Video" ? (
              <iframe
                width="100%"
                height="500"
                src={content}
                title="Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                {readContent ? (
                  <>
                    {!quizCompleted ? (
                      <MultipleChoiceQuiz
                        questions={quizzes[section].questions}
                        onComplete={handleQuizComplete}
                      />
                    ) : (
                      <div>
                        <p>{quizResult}</p>
                        {quizResult === "Incorrect! Please try again." ? (
                          <button
                            className="btn btn-primary"
                            onClick={handleRetryQuiz}
                          >
                            Retry Quiz
                          </button>
                        ) : section === "Leadership Team" ? (
                          <button
                            className="btn btn-success"
                            onClick={handleFinishTraining}
                          >
                            Finish Training
                          </button>
                        ) : (
                          <button
                            className="btn btn-primary"
                            onClick={handleProceed}
                          >
                            Proceed to Next Section
                          </button>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <div>
                    <p>{content}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => setReadContent(true)}
                    >
                      Proceed to Quiz
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
