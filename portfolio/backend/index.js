const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const port = process.env.PORT || "8888";
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}?retryWrites=true&w=majority&appName=Portfolio`;
const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: "*"
}));



//About page setting, react(About.jsx)
app.get("/api/about", async (request, response) => {
    let portfolios = await getPortfolios();
    response.json(portfolios);
});

app.get("/api/work", async (request, response) => {
  let works = await getWorks();
  response.json(works);
});

// email setting.
app.get("/api/email", async (request, response) => {
// console.log("tsts");
const mail = process.env.MAIL_ACCOUNT;
const pass = process.env.MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: mail,
    pass: pass,
  }
});
console.log(request.query)
const emailData= {
  from: request.query.userEmail,
  to: "yutoarimori@gmail.com",
  subject: "Test Mail",
  text: request.query.userMsg
};
transporter.sendMail({
  from: request.query.userEmail,
  to: "yutoarimori@gmail.com",
  subject: "Test Mail",
  text: request.query.userMsg
});
response.json(emailData);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

async function connection() {
    await client.connect();
    const db = client.db("Portfolio");
    return db;
  }

async function getPortfolios() {
    db = await connection();
    const results = db.collection("Portfolio").find({});
    const res = await results.toArray();
    return res;
  } 

  async function getWorks() {
    db = await connection();
    const results = db.collection("Work").find({});
    const res = await results.toArray();
    return res;
  } 

