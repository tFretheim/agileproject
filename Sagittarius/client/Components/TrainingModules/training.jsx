import introTrainingModule from "../../assets/images/intro-training-module.svg";
import securityTrainingModule from "../../assets/images/security-training-module.svg";
import departmentsTrainingModule from "../../assets/images/departments-training-module.svg";
import responsibilitiesTrainingModule from "../../assets/images/responsibilities-training-module.svg";
import systemsTrainingModule from "../../assets/images/systems-training-module.svg";
import recapTrainingModule from "../../assets/images/recap-training-module.svg";
import { NavLink } from "react-router-dom";


// Check introduction.jsx this is not the finished product for this site!
export function Training() {
  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-12">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "10%" }}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              10%
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <NavLink to="/training/introduction" className="nav-link">
            <div className="card">
              <img
                src={introTrainingModule}
                className="card-img-top"
                alt="Introduction"
              />
              <div className="card-body">
                <h5 className="card-title">Introduction</h5>
                <p className="card-text">10 Tasks</p>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-md-4 mb-4">
          <NavLink to="/training/security" className="nav-link">
            <div className="card">
              <img
                src={securityTrainingModule}
                className="card-img-top"
                alt="Security"
              />
              <div className="card-body">
                <h5 className="card-title">Security</h5>
                <p className="card-text">8 Tasks</p>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-md-4 mb-4">
          <NavLink to="/training/departments" className="nav-link">
            <div className="card">
              <img
                src={departmentsTrainingModule}
                className="card-img-top"
                alt="Departments"
              />
              <div className="card-body">
                <h5 className="card-title">Departments</h5>
                <p className="card-text">6 Tasks</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <NavLink to="/training/responsibilities" className="nav-link">
            <div className="card">
              <img
                src={responsibilitiesTrainingModule}
                className="card-img-top"
                alt="Responsibilities"
              />
              <div className="card-body">
                <h5 className="card-title">Responsibilities</h5>
                <p className="card-text">9 Tasks</p>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-md-4 mb-4">
          <NavLink to="/training/systems" className="nav-link">
            <div className="card">
              <img
                src={systemsTrainingModule}
                className="card-img-top"
                alt="Systems"
              />
              <div className="card-body">
                <h5 className="card-title">Systems</h5>
                <p className="card-text">18 Tasks</p>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="col-md-4 mb-4">
          <NavLink to="/training/recap" className="nav-link">
            <div className="card">
              <img
                src={recapTrainingModule}
                className="card-img-top"
                alt="Recap"
              />
              <div className="card-body">
                <h5 className="card-title">Recap</h5>
                <p className="card-text">10 Tasks</p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
