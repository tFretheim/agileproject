import { useEffect, useState } from "react";
import BackButton from '../shared/BackButton';

// Check introduction.jsx this is not the finished product for this site!
export function Systems() {
  const [section, setSection] = useState("Systems Overview");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (section === "Systems Overview") {
      setContent("https://www.youtube.com/embed/mqb6npoiLyQ");
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
            <h2 className="mb-4 exciting-heading-systems">Systems: Overview</h2>
            <div className="list-group mb-4">
              <button
                className={`list-group-item list-group-item-action ${section === "Systems Overview" ? "active" : ""}`}
                onClick={() => setSection("Systems Overview")}
              >
                Systems Overview
              </button>
              <button
                className={`list-group-item list-group-item-action ${section === "Our Systems" ? "active" : ""}`}
                onClick={() => setSection("Our Systems")}
              >
                Our Systems
              </button>
              <button
                className={`list-group-item list-group-item-action ${section === "Guide System one" ? "active" : ""}`}
                onClick={() => setSection("Guide System one")}
              >
                Guide System one
              </button>
              {/* Add other buttons similarly */}
              <button
                className="list-group-item list-group-item-action"
                disabled
              >
                System video
              </button>
              <button
                className="list-group-item list-group-item-action"
                disabled
              >
                System video
              </button>
              <button
                className="list-group-item list-group-item-action"
                disabled
              >
                System video
              </button>
              <button
                className="list-group-item list-group-item-action"
                disabled
              >
                System video
              </button>
              <button
                className="list-group-item list-group-item-action"
                disabled
              >
                System video
              </button>
            </div>
          </div>
        <div className="col-md-9">
          <div className="content-display-systems">
            {section === "Systems Overview" ? (
              <iframe
                width="100%"
                height="500"
                src={content}
                title="Systems Overview"
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
