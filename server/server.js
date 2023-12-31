require ("dotenv").config()
const express = require("express");
const cors = require("cors");
const path = require("path");

const contactRoute = require('./route/contactRoute')

const app = express();


//creating the middleware
app.use(express.json())
app.use(cors())

app.use("/", contactRoute);

// Serve our api message
app.get("/api/message", async (req, res, next) => {
    try {
      res.status(201).json({ message: "HELLO FROM EXPRESS" });
    } catch (err) {
      next(err);
    }
  });

if(process.env.NODE_ENV === "production"){
    app.use(express.static("build"))
    app.get("*", (req, res)=>(
        res.sendFile(path.resolve(__dirname, "build", "index.html"))
    ));
}

const port = process.env.PORT || 5001;
app.listen(port, console.log(`server listening to port 5001`));