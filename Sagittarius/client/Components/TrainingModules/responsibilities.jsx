import { useEffect, useState } from "react";
import BackButton from '../shared/BackButton';

// Check introduction.jsx this is not the finished product for this site!
export function Responsibilities() {
  const [section, setSection] = useState("Responsibilities overview");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (section === "Responsibilities Overview") {
      setContent("https://www.youtube.com/embed/42dLWo9v0HM");
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
    <div>
      <div className="container-fluid p-3">
        <BackButton />
        <div className="row">
          <div className="col-md-3">
            <h2 className="mb-4 exciting-heading-responsibilities">
              Responsibilities: Overview
            </h2>
            <div className="list-group mb-4">
              <button
                className={`list-group-item list-group-item-action ${section === "Responsibilities Overview" ? "active" : ""}`}
                onClick={() => setSection("Responsibilities Overview")}
              >
                Responsibilities Overview
              </button>
              <button
                className={`list-group-item list-group-item-action ${section === "Your Responsibilities" ? "active" : ""}`}
                onClick={() => setSection("Your Responsibilities")}
              >
                Your Responsibilities
              </button>
              <button
                className={`list-group-item list-group-item-action ${section === "Work-culture" ? "active" : ""}`}
                onClick={() => setSection("Work-culture")}
              >
                Work-culture
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
          <div className="content-display-responsibilities">
            {section === "Responsibilities Overview" ? (
              <iframe
                width="100%"
                height="500"
                src={content}
                title="Responsibilities Overview"
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
      </div>
  );
}
