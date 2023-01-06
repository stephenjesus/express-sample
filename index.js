const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Server is running on port " + port)
});

app.post('/create' , (req, res) => {
    console.log(req.body);
    res.send("User Created")
})

app.listen(port , () => {
    console.log("Server Running on port " + port);
})