import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const app = express();

const PORT =
  process.env.PORT || 5000;

const allowedOrigins = (
  process.env.ALLOWED_ORIGINS ||
  "http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (
        !origin ||
        allowedOrigins.includes(origin)
      ) {
        callback(null, true);
        return;
      }

      callback(
        new Error("Origin not allowed by CORS")
      );
    },
  })
);

app.use(
  express.json({
    limit: "20kb",
  })
);

let messagesCollection;
let mongoClient;

async function connectToDatabase() {
  if (!process.env.MONGO_URI) {
    console.warn(
      "MONGO_URI is not configured. Messages will not be stored until it is added."
    );

    return;
  }

  try {
    mongoClient =
      new MongoClient(process.env.MONGO_URI);

    await mongoClient.connect();

    const database = mongoClient.db(
      process.env.MONGO_DB_NAME || "portfolio"
    );

    messagesCollection =
      database.collection("messages");

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(
      "MongoDB connection failed:",
      error.message
    );
  }
}

const transporter =
  nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

const cleanText = (
  value,
  maxLength = 2000
) => {
  return String(value || "")
    .trim()
    .replace(/[<>]/g, "")
    .slice(0, maxLength);
};

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
};

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.post("/contact", async (req, res) => {
  const firstName = cleanText(
    req.body.firstName,
    80
  );

  const lastName = cleanText(
    req.body.lastName,
    80
  );

  const email = cleanText(
    req.body.email,
    160
  ).toLowerCase();

  const phone = cleanText(
    req.body.phone,
    40
  );

  const message = cleanText(
    req.body.message,
    3000
  );

  const name =
    `${firstName} ${lastName}`.trim();

  if (
    !firstName ||
    !lastName ||
    !email ||
    !message
  ) {
    return res.status(400).json({
      error:
        "Please complete all required fields.",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      error:
        "Please enter a valid email address.",
    });
  }

  if (
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS
  ) {
    return res.status(503).json({
      error:
        "The contact service is not configured yet.",
    });
  }

  const submission = {
    name,
    email,
    phone,
    message,
    timestamp: new Date(),
  };

  try {
    if (messagesCollection) {
      await messagesCollection.insertOne(
        submission
      );
    }

    await transporter.sendMail({
      from:
        `Portfolio Contact Form <${process.env.EMAIL_USER}>`,

      replyTo:
        `${name} <${email}>`,

      to:
        process.env.EMAIL_USER,

      subject:
        `Portfolio Contact Form Submission from ${name}`,

      text: [
        "You received a new portfolio contact-form submission.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return res.status(200).json({
      status: "Message sent",
    });
  } catch (error) {
    console.error(
      "Contact submission failed:",
      error.message
    );

    return res.status(500).json({
      error:
        "Your message could not be sent. Please try again later.",
    });
  }
});

connectToDatabase().finally(() => {
  app.listen(PORT, () => {
    console.log(
      `Server running on port ${PORT}`
    );
  });
});