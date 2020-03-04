const express = require("express");
const app = express();
const fs = require('fs');

app.set('port', process.env.PORT || 80);

app.get('/:country',(req, res) => {
    fs.readFile('./data/' + req.params.country + ".txt", (err, data) => {
        if(err) throw new Error("File Read Error: " + err.message);

        res.status(200).send(data.toString());
    });
});

app.listen(app.get('port'), () => {
    console.log(`Server Started.\nListening on localhost:${app.get('port')}`);
});