const express = require("express");
const app = express();
app.get("/", function (request,response) {
  response.send("hello");
});
app.get("/contact", function (req,res) {
  res.send("contact");
});
  app.get("/about", function (req,res) {
    res.send("My Name Adi");
});
  app.get("/hobbies", function (req,res) {
  res.send("Music");
});
app.listen(3000, handleStart);
function handleStart()
{
  console.log("Server started on port 3000");
}
