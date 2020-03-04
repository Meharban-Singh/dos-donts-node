const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');
const cors = require('cors');//Cross-Origin-Requests

const dataPath = path.join(__dirname, 'data');

app.set('port', process.env.PORT || 80);

app.use(cors());

//Send array of countries in the system
app.get('/', (req, res) => {
    let countries = [];

    fs.readdir(dataPath, (err, files) => {
        if(err) {
            console.log(err);
            res.status(500).send('Error 500: Internal Server Error');
        }
        else {
            files.forEach( (file) => 
                countries.push(file.toLowerCase().substring(0, file.length - 5))
            );
            res.status(200).send(countries);
        }
    });
});

//Send data from country.json
app.get('/:country', (req, res, next) => {
    fs.readFile(dataPath + '/' + req.params.country + ".json", (err, data) => {
        if(err) {
            console.log(err);
            res.status(404).send("Error 404: Not Found");
        }
        else 
            res.status(200).send(data);
    });
});

app.listen(app.get('port'), () => {
    console.log(`Server Started.\nListening on localhost:${app.get('port')}`);
});