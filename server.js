const express = require("express");
const path = require("path");
const {v4:uuidv4} = require('uuid');

//to access the DB folder, file db.json
const dbJson = require("./db/db.json");



const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));




