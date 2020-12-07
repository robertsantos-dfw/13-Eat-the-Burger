// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const exphbr = require("express-handlebars");

//const apiRoutes = require("./routes/apiRoutes");
//const htmlRoutes = require("./routes/htmlRoutes");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbr({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controlers/controller.js");
app.use(routes);
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
