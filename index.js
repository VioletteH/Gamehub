import express from 'express';
const app = express();

import games from './games.json' with { type: "json" };

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.locals.games = games;
let foundGame;

app.get('/', (req, res) => {
    res.render("index.ejs", { foundGame })
});

app.get('/game/:nomDuJeu', (req, res) => {

    for (const game of games) {

        if (game.name.toLowerCase() === req.params.nomDuJeu.toLowerCase()) {
            foundGame = game;
            break;
        }
        }
        
    
    res.render(`${foundGame.name}.ejs`, { foundGame });
    //res.status(404).send("Ce jeu n'existe pas");
    //res.render("diceRoller.ejs", { style : "/css/diceRoller.css" });
});

// app.get('/game/fourchette', (req, res) => {
//      res.render("fourchette.ejs")
// });

// app.get('/game/diceRoller', (req, res) => {
//      res.render("diceRoller.ejs", { style : "/css/diceRoller.css" })
// });

app.listen(3000);