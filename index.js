// import packages
import express from "express";
// import body parsing middleware
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());

// app is listen here
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));