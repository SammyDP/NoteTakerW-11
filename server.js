const express = require("express");
const apiRoute = require("./Routes/apiRoute");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(`/api`, apiRoute);

// Listen on PORT
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
