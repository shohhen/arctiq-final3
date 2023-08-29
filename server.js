const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(6000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  host: 'mail.arctiq.uz',
  port: 465,
  auth: {
    user: "shohhen@arctiq.uz",
    pass: "Shoh_15291212505",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/", (req, res) => {
  const { name, number, message } = req.body;
  const mail = {
    from: name,
    to: "shohhen@arctiq.uz",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Number: ${number}</p>
           <p>Message: ${message}</p>`
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    } 
  });
});  
  
