import { useState, useEffect } from "react";
import profileIcon from "../../assets/images/profile-icon.png";
import "../../assets/styles/collegues.css";
import { NavLink } from "react-router-dom";


export function Colleagues() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchLoginMessage6();
  }, []);

  async function fetchLoginMessage6() {
    try {
      const res = await fetch("/api/colleagues", {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch: " + res.statusText);
      }

      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to load message");
    }
  }

  return (
    <main>
      <section className="white-background container p-2 h-auto w-auto">
        <div className="d-flex justify-content-around mb-3">
          <h3></h3>
          <h3 className="color-team team-heading">Your team</h3>
          <NavLink to="branch">
            <div className="d-flex align-content-end">
              <h5 className="color-department">
                Your Branch{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              </h5>
            </div>
          </NavLink>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
            <div className="d-flex box">
              <img
                className="img-team-styled"
                src={profileIcon}
                alt="Profile Icon"
              />
              <div className="flex-grow-1 ml-3">
                <p>Ole</p>
                <hr className="my-3" />
                <p className="mb-1">Frontend</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
            <div className="d-flex box">
              <img
                className="img-team-styled"
                src={profileIcon}
                alt="Profile Icon"
              />
              <div className="flex-grow-1 ml-3">
                <p>Henrik</p>
                <hr className="my-3" />
                <p className="mb-1">Interactive Design</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
            <div className="d-flex box">
              <img
                className="img-team-styled"
                src={profileIcon}
                alt="Profile Icon"
              />
              <div className="flex-grow-1 ml-3">
                <p>Ingrid</p>
                <hr className="my-3" />
                <p className="mb-1">Frontend</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
            <div className="d-flex box">
              <img
                className="img-team-styled"
                src={profileIcon}
                alt="Profile Icon"
              />
              <div className="flex-grow-1 ml-3">
                <p>Astrid</p>
                <hr className="my-3" />
                <p className="mb-1">Backend</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
            <div className="d-flex box">
              <img
                className="img-team-styled"
                src={profileIcon}
                alt="Profile Icon"
              />
              <div className="flex-grow-1 ml-3">
                <p>Sofie</p>
                <hr className="my-3" />
                <p className="mb-1">Scrum Master</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
            <div className="d-flex box">
              <img
                className="img-team-styled"
                src={profileIcon}
                alt="Profile Icon"
              />
              <div className="flex-grow-1 ml-3">
                <p>Magnus</p>
                <hr className="my-3" />
                <p className="mb-1">Backend</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
            <div className="d-flex box">
              <img
                className="img-team-styled"
                src={profileIcon}
                alt="Profile Icon"
              />
              <div className="flex-grow-1 ml-3">
                <p>Kari</p>
                <hr className="my-3" />
                <p className="mb-1">Product Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
