const express = require('express');

const app = express();

const port = process.env.PORT || 8082;

//Middleware
const verifdate = (req, res, next) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let hour = new Date().getHours();
  
    if (
      days[new Date().getDay()] !== "Saturday" &&
      days[new Date().getDay()] !== "Sunday" &&
      hour >= 9 &&
      hour < 23
    ) {
      next();
    } else {
      res.send("Sorry , we are not working , come back at the regular time.");
    }
  };
  
  app.use(verifdate);
  
  // Routing Middleware.
  
  app.use(express.static("Public"));
  
  app.listen(port, () => {
    console.log(`The server is Running in the  port n° ${port}`);
  });