import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login/login";
import { Training } from "../Components/TrainingModules/training";
import { Profile } from "../Components/profilePage/profile";
import { QnA } from "../Components/QnA/qna";
import { ContactUs } from "../Components/QnA/contactUs";
import { About } from "../Components/AboutKPMG/about";
import { LandingPage } from "../Components/Landingpage/landingpage";
import { Colleagues } from "../Components/Colleagues/colleagues";
import { Calendar } from "../Components/Calendar/calendar";
import { Introduction } from "../Components/TrainingModules/introduction";
import { Security } from "../Components/TrainingModules/security";
import { Departments } from "../Components/TrainingModules/departments";
import { Responsibilities } from "../Components/TrainingModules/responsibilities";
import { Systems } from "../Components/TrainingModules/systems";
import { Recap } from "../Components/TrainingModules/recap";
import { Branch } from "../Components/Colleagues/branch";
import { BackButton } from "../Components/shared/backButton"
import { LogoutButton } from "../Components/shared/logoutButton"

// Returning 404 if a api is not found
function NotFound() {
  React.useEffect(() => {
    console.error("404 Site Not Found");
  }, []);

  return (
    <div>
      <h2>404 Site Not Found</h2>
    </div>
  );
}

// Routes to different API´s
export function Application() {
  return (
    <Routes>
      <Route>
        <Route path={"/"} element={<Login />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/qna"} element={<QnA />} />
        <Route path={"/contactus"} element={<ContactUs />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/landing"} element={<LandingPage />} />
        <Route path={"/calendar"} element={<Calendar />} />
        <Route path={"/colleagues"} element={<Colleagues />} />
        <Route path={"/colleagues/branch"} element={<Branch />} />
        <Route path={"/training"} element={<Training />} />
        <Route path={"/training/introduction"} element={<Introduction />} />
        <Route path={"/training/security"} element={<Security />} />
        <Route path={"/training/security"} element={<Security />} />
        <Route path={"/training/departments"} element={<Departments />} />
        <Route
          path={"/training/responsibilities"}
          element={<Responsibilities />}
        />
        <Route path={"/training/systems"} element={<Systems />} />
        <Route path={"/training/recap"} element={<Recap />} />
        {/* Add other routes here */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
