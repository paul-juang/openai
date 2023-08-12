const express = require('express');
const app = express();

const openai = require('openai');

require('dotenv').config()

const path = require('path');


const PORT = process.env.PORT || 3000;

//app.set
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(cookieParser());


app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});
