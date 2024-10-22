import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BackButton from '../shared/BackButton';

// Check introduction.jsx this is not the finished product for this site!
export function Security() {
  const [section, setSection] = useState("Security Overview");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (section === "Security Overview") {
      setContent("https://www.youtube.com/embed/9OHLd5ZgjvA");
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
      <div className="container-fluid p-3 text-white">
        <BackButton />
        <div className="row">
          <div className="col-md-3">
            <h2 className="mb-4 exciting-heading-security">
              Security: Overview
            </h2>
            <div className="list-group mb-4">
              <button
                  className={`list-group-item list-group-item-action ${section === "Security Overview" ? "active" : ""}`}
                  onClick={() => setSection("Security Overview")}
              >
                Security Overview
              </button>
              <button
                  className={`list-group-item list-group-item-action ${section === "Access Control" ? "active" : ""}`}
                  onClick={() => setSection("Access Control")}
              >
                Access Control
              </button>
              <button
                  className={`list-group-item list-group-item-action ${section === "Data Protection" ? "active" : ""}`}
                  onClick={() => setSection("Data Protection")}
              >
                Data Protection
              </button>
              {/* Add other buttons similarly */}
              <button
                  className="list-group-item list-group-item-action"
                  disabled
              >
                Security video
              </button>
              <button
                  className="list-group-item list-group-item-action"
                  disabled
              >
                Security video
              </button>
              <button
                  className="list-group-item list-group-item-action"
                  disabled
              >
                Security video
              </button>
              <button
                  className="list-group-item list-group-item-action"
                  disabled
              >
                Security video
              </button>
              <button
                  className="list-group-item list-group-item-action"
                  disabled
              >
                Security video
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="content-display-security">
              {section === "Security Overview" ? (
                  <iframe
                      width="100%"
                      height="500"
                      src={content}
                      title="Security Overview"
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

