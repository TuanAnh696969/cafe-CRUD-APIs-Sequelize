const express = require("express");

const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8044"
};

app.use(cors(corsOptions));


app.use(express.json());  


app.use(express.urlencoded({ extended: true }));   

const db = require("./app/models");
db.sequelize.sync();


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to @Tuananh00069 application cafe đen " });
});

//require("./app/routes/cafe.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8095;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
