// import packages
import express from "express";
// import body parsing middleware
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());

// we are creating some route which we can then visit in our browser or we can send request too.
app.get('/', (req, res) => {
    console.log('[TEST]!');
    res.send('Hello world');
})

// app is listen here
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));