import { useRef, useState } from "react";
import arrowDownIcon from "../../assets/images/icons8-arrow-down-50.png";
import teambuilding from "../../assets/images/teambuilding2.png";
import meeting from "../../assets/images/meeting2.png";
import schedule from "../../assets/images/schedule.xl.png";
import longline from "../../assets/images/longline.png";
import kpmgbuilding from "../../assets/images/KPMG-bygget_1.jpeg";
import rocket from "../../assets/images/icons8-rocket-100.png";
import office from "../../assets/images/office.png";
import officebuilding from "../../assets/images/officebuilding.png";
import "../../assets/styles/landingpage.css";
import MapComponent from "../Landingpage/MapComponent";
import { Link } from "react-router-dom";

export function LandingPage() {
  const teambuildingRef = useRef(null);


  // This is the function that handles the smooth scrolling when pressing the "Get started" button
  // Takes the user down to the content
  const handleScroll = () => {
    if (teambuildingRef.current) {
      const offsetTop = teambuildingRef.current.offsetTop - 270;
      const startPosition = window.pageYOffset;
      const distance = offsetTop - startPosition;
      const duration = 250;
      let startTime = null;


      // This is the function that performs the scroll animation
      const scrollStep = (timestamp) => {
        if (startTime === null) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressPercent = Math.min(progress / duration, 1);
        const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        const ease = easeInOutCubic(progressPercent);

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      };

      // Starts the scroll animation
      requestAnimationFrame(scrollStep);
    }
  };

  // This is where everything gets printed into the solution. Here we use mostly styling with Bootstrap, but some bits
  // with css external code as well. It is responsive design and code, so it fits for all sizes on the web.
  return (
      <section className="container-fluid landing-container p-0 m-0">
        <div className="position-relative w-100 vh-100">
          <img
              src={kpmgbuilding}
              alt="background"
              className="position-absolute w-100 h-100"
              style={{ objectFit: "cover" }}
          />
          <div className="position-relative text-end p-5">
            <h2 className="text-white">Welcome.</h2>
            <div className="d-inline-block position-relative">
              <button onClick={handleScroll} className="btn kpmg-blue text-white">
                Get started{" "}
                <img
                    src={arrowDownIcon}
                    alt="arrow down icon"
                    style={{ width: "20px", height: "20px" }}
                />{" "}
              </button>
            </div>
          </div>

          <img
            src={longline}
            alt="longline"
            className="position-absolute"
            style={{
              top: "130px",
              right: "100px",
              height: "calc(100vh - 75px)",
              width: "0.5vw",
            }}
          />

          <img
            src={rocket}
            alt="rocket"
            className="position-absolute"
            style={{
              top: "calc(170px + 100vh - 75px - 30px)",
              right: "53.5px",
              transform: "rotate(180deg)",
            }}
          />

        </div>

        <div style={{ height: "80px" }}></div>

        <div className="container py-5 bg-black mt-5">
          <div className="row my-5 align-items-center" ref={teambuildingRef}>
            <div className="col-md-4">
              <p className="rounded p-2 text-white fw-light fs-2">
                Get to know your new co-workers at our teambuilding events.
              </p>
              <Link to="/colleagues" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="col-md-8">
              <img
                  src={teambuilding}
                  alt="teambuilding image"
                  className="img-fluid rounded"
                  style={{ maxWidth: "80%", borderRadius: "30px" }}
              />
            </div>
          </div>

          <div style={{ height: "50px" }}></div>

          <div className="row my-5 align-items-center">
            <div className="col-md-8">
              <img
                  src={meeting}
                  alt="meeting image"
                  className="img-fluid rounded"
                  style={{ maxWidth: "80%", borderRadius: "30px" }}
              />
            </div>
            <div className="col-md-4">
              <p className="rounded p-2 text-white fw-light fs-2">
                Get your relevant training by our competent mentors before the
                start-up.
              </p>
              <Link to="/training" className="btn btn-primary">
                Learn More
              </Link>{" "}
            </div>
          </div>

          <div style={{ height: "10px" }}></div>

          <div className="row my-5 align-items-center">
            <div className="col-md-4">
              <p className="rounded p-2 text-white fw-light fs-2">
                Check your personalized calendar for information about your
                upcoming days here with us.
              </p>
              <Link to="/calendar" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="col-md-8">
              <img
                  src={schedule}
                  alt="schedule image"
                  className="img-fluid rounded"
                  style={{ maxWidth: "80%", borderRadius: "30px" }}
              />
            </div>
          </div>

          <div style={{ height: "50px" }}></div>

          <div className="row justify-content-center my-5">
            <h3 className="text-center w-100 text-white mb-3 fs-2">
              Our office, your workplace.
            </h3>
            <p>{/*To make some space*/}</p>
            <div className="col-md-4 text-center">
              <img
                  src={office}
                  alt="office image"
                  className="img-fluid rounded mb-2"
                  style={{ maxWidth: "100%", borderRadius: "30px" }}
              />
              <p className="text-white fw-light" style={{ fontSize: "0.9rem" }}>
                From the inside of our office.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                  src={officebuilding}
                  alt="office building image"
                  className="img-fluid rounded mb-2"
                  style={{ maxWidth: "100%", borderRadius: "30px" }}
              />
              <p className="text-white fw-light" style={{ fontSize: "0.9rem" }}>
                Easy to travel to, our office is located in Majorstuen, Oslo.
              </p>
            </div>
          </div>

          <div style={{ height: "20px" }}></div>

          <div
              className="row justify-content-center my-5"
              style={{ width: "50%", margin: "0 auto" }}
          >
            <h3 className="text-center w-100 text-white mb-3 fs-2">
              Find us here
            </h3>
            <MapComponent />
            <div className="text-white mt-4">
              <h4 className="mb-3">How to get to our office</h4>
              <p>
                To reach the KPMG office building at Majorstuen in Oslo from the Majorstuen T (subway station), follow these simple steps:
              </p>
              <p>
                1. <strong>Exit the Subway Station:</strong> Once you arrive at Majorstuen T, head towards the main exit of the station, which opens onto Kirkeveien.
              </p>
              <p>
                2. <strong>Turn Right onto Kirkeveien:</strong> After exiting the station, turn right onto Kirkeveien. You will pass several shops and cafes along the way.
              </p>
              <p>
                3. <strong>Continue Straight:</strong> Walk straight along Kirkeveien for approximately 300 meters. You will cross a few intersections, but continue following the road straight ahead.
              </p>
              <p>
                4. <strong>Turn Left onto Middelthuns Gate:</strong> When you reach the intersection of Kirkeveien and Middelthuns gate, turn left. You will see a large office building ahead.
              </p>
              <p>
                5. <strong>Arrive at the KPMG Office:</strong> Continue walking down Middelthuns gate for about 100 meters. The KPMG office building will be on your right-hand side, located at number 27-29 Middelthuns gate.
              </p>
              <p>
                Additionally, if you are coming by bus, there is a bus stop conveniently located right outside the KPMG building, called Majorstuen. The tram is also a 2-minute walking distance from the office. This makes it easy for visitors and employees to access the office via public transport.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
