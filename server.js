// Dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");
const {v4:uuidv4} = require('uuid');

//to access the DB folder, file db.json
const databaseJson = require("./db/db.json");

// Sets up the Express APP
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.get('/notes', (req,res) => res.sendFile(path.join(__dirname, "./public/notes.html")));

app.get('/api/notes', (req,res) => {
    const dNotes = fs.readFileSync(path.join(__dirname,"./db/db.json"), "utf-8");
    const parseNotes = JSON.parse(dNotes);
    res.json(parseNotes);
});

app.post('/api/notes', (req,res) => {
    const dNotes = fs.readFileSync(path.join(__dirname,"./db/db.json"), "utf-8");
    const parseNotes = JSON.parse(dNotes);
    req.body.id = uuidv4();
    parseNotes.push(req.body);

    fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(parseNotes), "utf-8");
    res.json("You added a note successfully!");
});

app.delete("/api/notes/:id", function (req, res) {

    let data = fs.readFileSync("./db/db.json", "utf8");

    const dataJSON = JSON.parse(data);

    const newNotes = dataJSON.filter((note) => {
        return note.id !== req.params.id;
      });

      fs.writeFile( "./db/db.json",JSON.stringify(newNotes),(err, text) => {
        if (err) {
          console.error(err);
          return;
        }
      });
      res.json(newNotes);
});


app.listen(PORT,() => console.log(`App listening at http://localhost:${PORT} 🚀`));

