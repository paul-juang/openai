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

app.post("/chatGPT", async (req, res) => {

  let prompt = req.body.prompt;

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
        let answer = response["data"]["choices"][0]["message"]["content"]
        res.json({answer})
       } 
    catch(error) {
        console.log({error})
        res.json({error})
       }
    }

   chatGPT(prompt)

  })
  
app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
});

/*
import express from "express"
//const express = require('express');

const app = express();

import cors from "cors"
//const cors = require('cors');

import bodyParser from "body-parser"
//const bodyParser = require('body-parser');

import 'dotenv/config' 
//require('dotenv').config();

import path from "path"
//const path = require('path');

import { Configuration, OpenAIApi } from "openai"
//const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const PORT = process.env.PORT || 3000;

//app.set
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

//middleware
app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(cors());

//home page
app.get("/", (req, res) => {
  res.render("chatgpt");
});

app.post("/chatGPT", async (req, res) => {
  
  let prompt = req.body.prompt;

  import { Configuration, OpenAIApi } from "openai" 
  //??? error
  //see https://stackoverflow.com/questions/76917525
  /module-has-no-exported-member-when-importing-from-openai
  //const { Configuration, OpenAIApi } = require("openai");

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
        let answer = response["data"]["choices"][0]["message"]["content"]
        res.json({answer})
       } 
    catch(error) {
        res.json({error})
       }
    }

   chatGPT(prompt)
   
  })
  
app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
});
*/
