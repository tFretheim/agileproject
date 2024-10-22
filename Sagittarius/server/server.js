import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import { MongoClient } from "mongodb";

// Fetching from .env file
// Usually the mongoDB password are not pushed up to gitHub, but in this case we did it
dotenv.config();

// Initialize the Express application
const app = express();
const port = process.env.PORT || 26401; // Port to default be 26401
const MongoDbUrl = process.env.MONGODB_URL; // Get mongoDB url from .env (environmental variables)

// Creates a new mongoclient
const client = new MongoClient(MongoDbUrl);

// Connection to mongoDB
client
  .connect()
  .then(() => {
    console.log("Connected to MongoDb successfully :)");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDb:", error);
  });

const dbTraining = client.db("training"); // Training database
const dbUserLogin = client.db("userlogin"); // User login database
const dbCalendar = client.db("calendar"); // Calendar database

// Middleware for parsing JSON
app.use(express.json());
app.use(cookieParser());

// Login endpoint
// Login endpoint
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user with the provided username and password
    const user = await dbUserLogin.collection("users").findOne({ username, password });

    // Check if a user is found
    if (user) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Fetch content from training database
app.get("/api/content/:section", async (req, res) => {
  const section = req.params.section;
  console.log(`Fetching content for section: ${section}`);
  try {
    const sectionContent = await dbTraining
      .collection("Sections")
      .findOne({ intro: section });
    console.log(`Found sectionContent: ${JSON.stringify(sectionContent)}`);
    res.json(
      sectionContent
        ? { content: sectionContent.content }
        : { content: "No content available" },
    );
  } catch (error) {
    console.error("Error fetching the content:", error);
    res.status(500).send("Error fetching the content");
  }
});

// Save content to training database
app.post("/api/content/:section", async (req, res) => {
  const section = req.params.section;
  const { content } = req.body;

  if (!content) {
    return res.status(400).send("Content is required");
  }

  try {
    const result = await dbTraining
      .collection("Sections")
      .updateOne({ intro: section }, { $set: { content } }, { upsert: true });
    console.log(`Content saved: ${JSON.stringify(result)}`);
    res.status(200).send({ success: true, result });
  } catch (error) {
    console.error("Error saving the content:", error);
    res.status(500).send("Error saving the content");
  }
});

// Fetching events from calendar
app.get("/api/calendar", async (req, res) => {
  try {
    const events = await dbCalendar.collection("events").find({}).toArray();
    res.json({ events });
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send("Error fetching events");
  }
});

// Different API-endpoints for the different sites
app.get("/api/qna", (req, res) => {
  res.send({ message: "Hello from the API-qna!" });
});

app.get("/api/introduction", (req, res) => {
  res.send({ message: "Hello from the API-introduction!" });
});

app.get("/api/landing", (req, res) => {
  res.send({ message: "Hello from the API-landing!" });
});

app.get("/api/about", (req, res) => {
  res.send({ message: "Hello from the API-about!" });
});

app.get("/api/profile", (req, res) => {
  res.send({ message: "Hello from the API-profile!" });
});

app.get("/api/colleagues", (req, res) => {
  res.send({ message: "Hello from the API-colleagues!" });
});

// Serve static files from the React app
app.use(express.static("../client/dist/"));

// Middleware to serve React app for non-API GET requests
app.get("*", (req, res) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    res.status(404).send({ error: "404 Site Not Found" });
  }
});

// Starting the server
app
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${port} is already in use`);
      process.exit(1);
    } else {
      throw err;
    }
  });
