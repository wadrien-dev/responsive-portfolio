// server.js - enable nodemailer backend

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


// server used to send emails 
const app = express();
app.use(cors());
app.use(express.json());

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

app.post("/contact", (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = `${firstName} ${lastName}`;
    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission",
        html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>
                
        `,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) res.json(error);
        else res.json({ code: 200, status: "Message Sent" });
    })
});

// start server
app.listen(5000, () => console.log("Server Running"));