import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BackButton from '../shared/BackButton';

// Check introduction.jsx this is not the finished product for this site!
export function Departments() {
  const [section, setSection] = useState("Departments overview");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (section === "Departments Overview") {
      setContent("https://www.youtube.com/embed/8YFzf8QMC1E");
    } else {
      fetchContent(section);
    }
  }, [section]);

  async function fetchContent(section) {
    try {
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

  return (
      <div className="container-fluid p-3">
        <BackButton />
        <div className="row">
          <div className="col-md-3">
            <h2 className="mb-4 exciting-heading-departments">
              Departments: Overview
            </h2>
            <div className="list-group mb-4">
              <button
                className={`list-group-item list-group-item-action ${section === "Departments Overview" ? "active" : ""}`}
                onClick={() => setSection("Departments Overview")}
              >
                Apartments Overview
              </button>
              <button
                className={`list-group-item list-group-item-action ${section === "Your Department" ? "active" : ""}`}
                onClick={() => setSection("Your Department")}
              >
                Your Department
              </button>
              <button
                className={`list-group-item list-group-item-action ${section === "Financial Services" ? "active" : ""}`}
                onClick={() => setSection("Financial Services")}
              >
                Financial Services
              </button>
              {/* Add other buttons similarly */}
              <button
                className="list-group-item list-group-item-action"
                disabled
              >
                Department video
              </button>
              <button
                className="list-group-item list-group-item-action"
                disabled
              >
                Department video
              </button>
              <button
                className="list-group-item list-group-item-action"
                disabled
              >
                Department video
              </button>
              <button
                className="list-group-item list-group-item-action"
                disabled
              >
                Department video
              </button>
              <button
                className="list-group-item list-group-item-action"
                disabled
              >
                Department video
              </button>
            </div>
          </div>
        <div className="col-md-9">
          <div className="content-display-departments">
            {section === "Departments Overview" ? (
              <iframe
                width="100%"
                height="500"
                src={content}
                title="Departments Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
      </div>
      </div>
  );
}
