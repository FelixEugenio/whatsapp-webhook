const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/webhook', (req, res) => {
    let mode = req.query['hub.mode'];
    let challenge = req.query['hub.challenge'];
    let verify_token = req.query['hub.verify_token'];
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});