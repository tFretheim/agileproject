import { useState } from "react";
import "../../assets/styles/login.css";
import kpmgLogo from "../../assets/images/kpmg-logo.png";

// Login component
export function Login() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [loginError, setLoginError] = useState(false);

  // Function to handle login
  async function handleLogin() {
    try {
      // Debugging: Log the credentials being sent
      console.log("Logging in with:", { email, password });

      // Making a login/POST request to the login server API
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password }),
      });

      // Checking the response status
      if (!res.ok) {
        setLoginError(true);
        throw new Error("Failed to login: " + res.statusText);
      }

      const data = await res.json();
      setMessage(data.message);
      setLoginError(false);

      // If login is successful redirect to the landing page else error message
      if (data.message === "Login successful") {
        window.location.href = "/landing";
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Invalid username or password.");
      setLoginError(true);
    }
  }

  // Function to handle forgot password
  async function handleForgotPassword() {
    try {
      const res = await fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Failed to reset password: " + res.statusText);
      }

      const data = await res.json();
      setResetMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
      setResetMessage("Failed to reset password");
    }
  }

  // JSX code for the login and forgot password UI and UX
  return (
      <main>
        <div className="container-fluid login-container d-flex align-items-center justify-content-center">
          <div className={`login-card ${forgotPassword ? "forgot-password-card" : ""}`}>
            <div className="header d-flex justify-content-between align-items-center">
              <img src={kpmgLogo} alt="KPMG Logo" className="kpmg-logo" />
            </div>
            <div className="subheader">KPMG's Onboarding Program</div>
            <div className="content d-flex">
              {forgotPassword ? (
                  <div className="password-reset-container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-center">
                      Enter your email associated with this account and we will send you a link to reset your password.
                    </h3>
                    <input
                        type="email"
                        className="form-control mt-3"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        id="submit-button"
                        className="btn btn-custom btn-block mt-3"
                        onClick={handleForgotPassword}
                    >
                      Submit
                    </button>
                    {resetMessage && (
                        <p className="mt-2 text-center">{resetMessage}</p>
                    )}
                    <button
                        className="btn btn-link mt-2 text-white"
                        onClick={() => setForgotPassword(false)}
                    >
                      Back to sign in
                    </button>
                  </div>
              ) : (
                  <>
                    <div className="welcome-message-container text-center flex-grow-1">
                      <h2 className="card-title">Welcome to KPMG!</h2>
                      <p>
                        Congratulations on joining our team. Our onboarding program is designed to provide you with the essential tools and knowledge you need to succeed. Log in to access a wealth of resources, training modules, and information that will help you integrate smoothly into your new role.
                      </p>
                      <p>
                        We are excited to have you with us and look forward to your contributions. Welcome aboard!
                      </p>
                    </div>
                    <div className="login-form-container flex-grow-1">
                      <div className="card-body">
                        <input
                            type="text"
                            className={`form-control mt-3 ${loginError ? "is-invalid" : ""}`}
                            placeholder="Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className={`form-control mt-3 ${loginError ? "is-invalid" : ""}`}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                            />
                            <label
                                className="form-check-label text-white"
                                htmlFor="rememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                          <button
                              className="btn btn-link text-white"
                              onClick={() => setForgotPassword(true)}
                          >
                            Forgot password?
                          </button>
                        </div>
                        <button
                            id="login-button"
                            className="btn btn-custom btn-block mt-3"
                            onClick={handleLogin}
                        >
                          Login
                        </button>
                        {message && (
                            <p className={`mt-2 text-center ${loginError ? "text-danger" : "text-white"}`}>
                              {message}
                            </p>
                        )}
                      </div>
                    </div>
                  </>
              )}
            </div>
          </div>
        </div>
      </main>
  );
}

