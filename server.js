// server.js - enable nodemailer backend

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

// connect to db
const client = new MongoClient(process.env.MONGO_URI);
let messagesCollection;

async function connectToDB() {
    try {
        await client.connect();
        const db = client.db('portfolio');
        messagesCollection = db.collection('messages');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

connectToDB();

// email setup
const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if(error) console.log("Email config error: ", error);
    else console.log("Ready to send emails.");
});

// contact form POST route
app.post("/contact", async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = `${firstName} ${lastName}`;

    // compose email to you
    const mail = {
        from: name,
        to: process.env.EMAIL_USER, // personal email (hidden form users)
        subject: "Contact Form Submission",
        html: `
                <h3>You received a new message via your portfolio:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>
                
        `,
    };

    try{
        
        // save message to database
        await messagesCollection.insertOne({
            name,
            email,
            phone,
            message,
            timestamp: new Date(),
        });

        // send email
        await contactEmail.sendMail(mail);

        res.status(200).json({status: "Message Sent" });
    } catch (error) {
        res.status(500).json(error);
    }

});

// start server
app.listen(PORT, () => console.log("Server Running"));