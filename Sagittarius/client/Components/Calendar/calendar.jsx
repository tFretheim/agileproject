import { useState, useEffect } from "react";
import moment from "moment";
import "../../assets/styles/calendar.css";


// Fetches events from the server and displays them in a calendar format
export function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const res = await fetch("/api/calendar", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch: " + res.statusText);
      }

      const data = await res.json();
      setEvents(data.events);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Styling for the calendar
  return (
    <div className="calendar-container">
      <h1>Upcoming Events</h1>
      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-date">
              <span className="event-day">
                {moment(event.start).format("DD")}
              </span>
              <span className="event-month">
                {moment(event.start).format("MMM")}
              </span>
            </div>
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-time">
                {moment(event.start).format("hh:mm A")} -{" "}
                {moment(event.end).format("hh:mm A")}
              </p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
