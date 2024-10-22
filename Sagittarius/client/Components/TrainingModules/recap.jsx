import { useEffect, useState } from "react";
import BackButton from '../shared/BackButton';

// Check introduction.jsx this is not the finished product for this site!
export function Recap() {
  const [section, setSection] = useState("Recap Overview");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (section === "Recap Overview") {
      setContent("https://www.youtube.com/embed/sJs_64OUpEs");
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
            <h2 className="mb-4 exciting-heading-recap">Recap: Overview</h2>
            <div className="list-group mb-4">
              <button
                  className={`list-group-item list-group-item-action ${section === "Recap Overview" ? "active" : ""}`}
                  onClick={() => setSection("Recap Overview")}
              >
                Recap Overview
              </button>
              <button
                  className={`list-group-item list-group-item-action ${section === "Recap Introduction" ? "active" : ""}`}
                  onClick={() => setSection("Recap Introduction")}
              >
                Recap Introduction
              </button>
              <button
                  className={`list-group-item list-group-item-action ${section === "Recap Security" ? "active" : ""}`}
                  onClick={() => setSection("Recap Security")}
              >
                Recap Security
              </button>
              <button
                  className={`list-group-item list-group-item-action ${section === "Recap Departments" ? "active" : ""}`}
                  onClick={() => setSection("Recap Departments")}
              >
                Recap Departments
              </button>
              <button
                  className={`list-group-item list-group-item-action ${section === "Recap Responsibilities" ? "active" : ""}`}
                  onClick={() => setSection("Recap Responsibilities")}
              >
                Recap Responsibilities
              </button>
              <button
                  className={`list-group-item list-group-item-action ${section === "Recap Systems" ? "active" : ""}`}
                  onClick={() => setSection("Recap Systems")}
              >
                Recap Systems
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="content-display-recap">
              {section === "Recap Overview" ? (
                  <iframe
                      width="100%"
                      height="500"
                      src={content}
                      title="Recap Overview"
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
