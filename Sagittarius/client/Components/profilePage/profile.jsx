import { useState } from "react";
import LogoutButton from "../shared/logoutButton";

export function Profile() {
  const [message, setMessage] = useState("");

  async function fetchLoginMessage3() {
    try {
      const res = await fetch("/api/profile", {
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
  //Used flexboxes so they can move if you make the screen smaller. and so the text is always centered.
      <main className="background-image">
        <h1 className="text-white text-center">Your profile</h1>

        <div style={{marginLeft: "40px"}}>
        </div>

        <div className="d-flex">
          <div className="profile-container">
            <div className="pro-pic">
              <figure className="profile-picture"></figure>
              <h5 className="text-black">Ola Normann</h5>
              <p className="text-muted">ola.normann@kpmg.no</p>
              <h4 className="kpmg-lightblue-text">About</h4>
              <p className="p-3 m-3">
                I'm a dedicated professional at KPMG, specializing in audit and
                advisory services. With a strong background in financial analysis,
                I consistently deliver high-quality insights and solutions to
                clients.
              </p>
              <LogoutButton/>
            </div>
          </div>
          <div className="personal-details">
            <h3 className="m-5">Personal Details</h3>
            <div className="d-flex flex-wrap p-2">
              <div>
                <label htmlFor="Full Name">Full Name</label>
                <input // here we made labels so that we can place a placeholder.
                    type="text"
                    id="profile-inputs"
                    className="form-control"
                    placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="Phone Number">Phone Number</label>
                <input
                    type="text"
                    id="profile-inputs"
                    className="form-control"
                    placeholder="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="Email">Email</label>
                <input
                    type="text"
                    id="profile-inputs"
                    className="form-control"
                    placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="LinkedIn">LinkedIn URL</label>
                <input
                    type="text"
                    id="profile-inputs"
                    className="form-control"
                    placeholder="LinkedIn"
                />
              </div>
            </div>
            <h3 className="m-5">Address</h3>
            <div className="d-flex flex-wrap p-2">
              <div>
                <label htmlFor="Street">Street</label>
                <input
                    type="text"
                    id="profile-inputs"
                    className="form-control"
                    placeholder="Street"
                />
              </div>
              <div>
                <label htmlFor="City">City</label>
                <input
                    type="text"
                    id="profile-inputs"
                    className="form-control"
                    placeholder="City"
                />
              </div>
              <div>
                <label htmlFor="County">County</label>
                <input
                    type="text"
                    id="profile-inputs"
                    className="form-control"
                    placeholder="County"
                />
              </div>
              <div>
                <label htmlFor="Zip Code">Zip Code</label>
                <input
                    type="text"
                    id="profile-inputs"
                    className="form-control"
                    placeholder="Zip Code"
                />
              </div>
            </div>
            <div className="d-flex justify-content-end m-5">
              <button type="button" name="submit" className="profile-buttons2">
                Cancel
              </button>
              <button
                  type="button"
                  name="submit" // on this code we made the buttons, these are not clickable. but its just show how it should look.
                  className="profile-buttons kpmg-lightblue-background"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </main>
  );
}
