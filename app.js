const express = require("express");
const app = express();
const exhbs = require("express-handlebars");

app.engine('handlebars', exhbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 80);

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/:country',(req, res) => {
    res.status(200).send(req.params.country);
});

app.listen(app.get('port'), () => {
    console.log(`Server Started.\nListening on localhost:${app.get('port')}`);
});