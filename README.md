# Note Taker Express

* [GitHub repository](https://github.com/luizborges146/note-taker-express)<br />
* [Deployed Link GitHub](https://luizborges146.github.io/note-taker-express/) - This link it will show the README.md in the web.<br />
* [Deployed Link Heroku](https://note-taker-expre.herokuapp.com/notes)<br />

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


    
## Table of Contents
    
1.  [Description](#description)
2.  [Instalation](#instalation)
3.  [Usage Infomration](#usage)
4.  [External support documentation](#externalDoc)
5.  [Tests](#tests)
6.  [Social](#social)
7.  [Plugins](#plugins)
8.  [License](#license)
    
## [Description](#description)
The idea of this application is to be able to create and delete notes to remind things that needs to be done, or just remember to do it later. Create a simple and visual interface that will facilitate the user to identify where they can add the TITLE and also TEXT they want to input, in order to save it, the user will see an icon on the top right coner once he filled up both information TITLE and TEXT, the idea is to prevent the user to only add one of the information. Once the note is saved in the application, the TITLE will display on the left side, as an easy access to review it. With one click the user is able to delete or review the data they input.


## [Instalation](#instalation)
N/A    
    
## [Usage](#usage)
Simple and visual access to the Notes.
 * Funcitonalities.
   * Create new Notes.
   * Review saved notes.
   * Delete notes.
   * Persistence data, so it will not delete even if you close the browser, the Data is saved on the application.

![alt Note-Taker-Home](assets/images/Note-taker.png)


#### Function below is a delete request, that will remove the the data if the user click to delete the note.
```
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
```

  

## [External support documentation](#externalDoc)
    

- [W3School](https://www.w3schools.com/)<br />
- [Mozilla](https://developer.mozilla.org)<br />
- [READ.me](https://docs.readme.com/docs/linking-to-pages")<br />
- [GitHub](https://pages.github.com/)<br />
- [GitHub Inquirer](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md#installation)
- [Git_cheat_sheet_pdf](https://education.github.com/git-cheat-sheet-education.pdf)<br />
- [npm](https://www.npmjs.com/)<br />
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)<br />
- [NodeJs - Path.join](https://nodejs.org/api/path.html#pathjoinpaths)<br />

    
## [Tests](#tests)
N/A
    
## [Social](#social)
if you need any further information or support, please, send an email to: luiz.borges.146@gmail.com
    
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/luizborges146) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/luiz-borges-2377b7142/)
    
    
    
## [Plugins](#plugins)
N/A
    
## [License](#license)
License Information: [MIT](https://opensource.org/licenses/MIT);

Created by Luiz Borges
Please refer to the LICENSE in the repo.
