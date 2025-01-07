const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/webhook', (req, res) => {
    let mode = req.query['hub.mode'];
    let challenge = req.query['hub.challenge'];
    let token = req.query['hub.verify_token'];


    const myToken = '';
    
    if(mode === 'subscribe' && token === myToken) {
        
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }


});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});