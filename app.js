  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  });

  const openai = new OpenAIApi(configuration);

  const chatGPT = async (prompt) => {
    try {
         const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role:"user", content:prompt}]
         })
        console.log(response["data"]["choices"][0]["message"]["content"])

       } 
    catch(error) {
        console.log({error})
       }
  }

  let prompt = "a list of ten random cities in the United State";
  chatGPT(prompt)
  
  
/*
const express = require('express');
const app = express();

const cors = require('cors');

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

require('dotenv').config();

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

const bodyParser = require('body-parser');


app.use(cors());



//home page
app.get("/", (req, res) => {
  res.render("chatgpt");
});

app.post("/temp", async (req, res) => {

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  async function start(argument) {
    const response = await openai.createCompletion({
      model: "text-devinci-003",
      prompt: "list ten random cities in the United States",
      tempreture: 0,
      max_token: 1000
    })
    console.log(response.data.choices[0.text])
  }
  

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
});
*/