import { useState, useEffect } from "react";
import profileIcon from "../../assets/images/profile-icon.png";
import { NavLink } from "react-router-dom";
import "../../assets/styles/branch.css";


export function Branch() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchLoginMessage6();
  }, []);

  async function fetchLoginMessage6() {
    try {
      const res = await fetch("/api/branch", {
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
        <div className="d-flex justify-content-between align-items-center mb-3">
          <NavLink to="../colleagues">
            <h5 className="color-team-branch color-department-branch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>
              Your team
            </h5>
          </NavLink>
          <h3 className="team-heading-branch color-team-branch">Your branch</h3>
          <h3></h3>
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
                <p className="mb-1">Business Analyst</p>
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
                <p className="mb-1">Agile Team Facilitator</p>
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
                <p className="mb-1">Stakeholders</p>
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
                <p className="mb-1">Agile Coach</p>
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
                <p className="mb-1">Development Team</p>
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
                <p>Ali</p>
                <hr className="my-3" />
                <p className="mb-1">Development Team</p>
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
                <p>Elin</p>
                <hr className="my-3" />
                <p className="mb-1">Development Team</p>
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
                <p>Lisa</p>
                <hr className="my-3" />
                <p className="mb-1">Development Team</p>
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
                <p>Kristine</p>
                <hr className="my-3" />
                <p className="mb-1">Development Team</p>
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
                <p className="mb-1">Development Team</p>
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
                <p>Philip</p>
                <hr className="my-3" />
                <p className="mb-1">Development Team</p>
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
                <p>Bob</p>
                <hr className="my-3" />
                <p className="mb-1">Development Team</p>
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
                <p>Mohammed</p>
                <hr className="my-3" />
                <p className="mb-1">Development Team</p>
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
                <p>Siri</p>
                <hr className="my-3" />
                <p className="mb-1">Development Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
