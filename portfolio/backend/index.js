const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();
// access to database
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
// Home page setting, get my works from the database 
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

let message = `You have received a form submission: send by ${request.query.userEmail} from ${request.query.userEmail} Message: ${request.query.userMsg}`;

const emailData= {
  from: request.query.userEmail,
  to: "yutoarimori@gmail.com",
  subject: "Test Mail",
  text: message
};
transporter.sendMail({
  from: request.query.userEmail,
  to: "yutoarimori@gmail.com",
  subject: "Test Mail",
  text: message
});
response.json(emailData);
});
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
// get the database.
async function connection() {
    await client.connect();
    const db = client.db("Portfolio");
    return db;
  }
// get the database and show the portfolio page.
async function getPortfolios() {
    db = await connection();
    const results = db.collection("Portfolio").find({});
    const res = await results.toArray();
    return res;
  } 
// get my works and show them on the home page
  async function getWorks() {
    db = await connection();
    const results = db.collection("Work").find({});
    const res = await results.toArray();
    return res;
  } 

