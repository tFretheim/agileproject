import { useState } from "react";


export function About() {
  const [message, setMessage] = useState("");

  async function fetchLoginMessage4() {
    try {
      const res = await fetch("/api/about", {
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
  // Here we made the backround image, then we used flex so they stay in place. And under the images we wrote text.
    <main className="background-image">
      <div className="p-5">
        <h1 className="text-white text-center m-4">The KPMG way</h1>
        <p className="text-white fs-2">
          In KPMG, our values define our actions and the responsibility we have
          towards our customers and society. Guided by the Global Code of
          Conduct, all KPMG employees are committed to conduct themselves to the
          highest standards both professionally and personally. We know that
          trust is earned and that's why we do what is right, always! Our
          people, in addition to the integrity that defines them, operate in
          accordance with international procedures and standards, necessary for
          all KPMG professionals.
        </p>
        <div className="d-flex p-2 justify-content-center gap-15px m-5">
          <figure className="image-container">
            <div className="antibribary-image"></div>
            <figcaption className="image-caption m-3">Anti-Bribery</figcaption>
          </figure>
          <figure className="image-container">
            <div className="codeofconduct-image"></div>
            <figcaption className="image-caption m-3">
              Code of Conduct
            </figcaption>
          </figure>
          <figure className="image-container">
            <div className="informationprivacy-image"></div>
            <figcaption className="image-caption m-3">
              Information Privacy
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
}
