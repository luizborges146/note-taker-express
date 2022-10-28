const fs = require("fs");
const express = require("express");
const path = require("path");
const {v4:uuidv4} = require('uuid');

//to access the DB folder, file db.json
const databaseJson = require("./db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.get('/notes', (req,res) => res.sendFile(path.join(__dirname, "./public/notes.html")));

app.get('/api/notes', (req,res) => {
    const dNotes = fs.readFileSync(path.join(__dirname,"./db/db.jsib"), "utf-8");
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

app.get('*', (req,res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.delete("/api/notes/:id",(req,res) => {
    
    let delNotes = parseInt(req.params.id);

    for(let i = 0; i < databaseJson.length; i++) {
        if (delNotes === databaseJson[i].id) {
            databaseJson.splice(i,1)

            let noteJson = JSON.stringify(databaseJson,null,2);

            fs.writeFile("./db/db.json", noteJson, function(err) {
                if(err) throw err;
                console.log("The note selected has been deleted!");
                res.json(databaseJson)
            })
        }
    }
})


app.listen(PORT,() => console.log(`App listening at http://localhost:${PORT} 🚀`));

