const express = require('express');
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.get('/error',(req, res) => {
    res.send('error Text');
})

app.get('/test', (req, res) => {
    res.send('test done');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})