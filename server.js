const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const apiroutes = require("./routes/api");
const htmlroutes = require("./routes/htmlroutes")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workoutdb',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(apiroutes);
app.use(htmlroutes);

app.listen(PORT, () => 
console.log(`Listening on localhost port: ${PORT}`))

