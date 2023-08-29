import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path"

const app = express();
const port = 3000;
const array = [];
const arrayList2 = [];
const today=new Date();
const day = today.getDay();

const dayOfMonth = today.getDate();
const month = today.getMonth();

const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

const monthNames = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const monthName = monthNames[month];
const dayOfWeek = dayNames[day];


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("today.ejs",{array,
                          dayOfWeek,
                          dayOfMonth,
                          monthName,
  });
  
});

app.get("/today", (req, res) => {
  res.render("today.ejs",{array,
    dayOfWeek,
    dayOfMonth,
    monthName,
});
});

app.get("/home",(req,res)=>{
  res.render("home.ejs");
})

app.get("/instructions", (req, res) => {
  res.render("instructions.ejs");
});

app.get("/work", (req, res) => {
  res.render("work.ejs",{arrayList2});
});


app.post("/submit_today",(req,res)=>{
  const input=req.body.itemListed;
  const checkbox = req.body.checkBox;

  array.push(input);
  res.redirect("/today");
});
app.post("/submit_work",(req,res)=>{
  const input2=req.body.itemListed;
  const checkbox2 = req.body.checkBox;

  arrayList2.push(input2);
  res.redirect("/work");
});

app.listen(port,()=>{
  console.log(`Listening to port http://localhost:${port}`);
})