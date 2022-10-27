const fs = require("fs");
const express = require("express");
const path = require("path");
const {v4:uuidv4} = require('uuid');

//to access the DB folder, file db.json
const dbJson = require("./db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/notes', (req,res) => res.sendFile(path.join(__dirname, "./public/notes.html")));

app.get('/api/notes', (req,res) => {
    const dNotes = fs.readFile(path.join(__dirname,"./db/db.jsib"), "utf-8");
    const parseNotes = JSON.parse(dNotes);
    res.json(parseNotes);
});

app.post('/api/notes', (req,res) => {
    const dNotes = fs.readFile(path.join(__dirname,"./db/db.jsib"), "utf-8");
    const parseNotes = JSON.parse(dNotes);
    req.body.id = uuidv4();
    parseNotes.push(req.body);

    fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(parseNotes), "utf-8");
    res.json("You added a note successfully!");
});

app.get('*', (req,res) => res.sendFile(path.join(__dirname, './public/index.html')));




app.listen(PORT,() => console.log(`App listening at http://localhost:${PORT} 🚀`));

