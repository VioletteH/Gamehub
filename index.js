import express from 'express';
const app = express();

import games from './games.json' with { type: "json" };

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));

app.locals.games = games;

app.get('/', (req, res) => {

    // const newArray = games.map((item) => ({
    //     name: item.name,
    //     css: item.cssFile
    // }));
    res.render("index.ejs")
});


app.get('/game/:nomDuJeu', (req, res) => {
    let foundGame;
    
    for (const game of games) {
        if (game.name === req.params.nomDuJeu) {
            foundGame = game;
        }
    }


    if(foundGame){
        res.render(`${foundGame.name}.ejs`, { foundGame });
    }
    else{
        res.status(404).send("Ce jeu n'existe pas");
    }

    //res.render("diceRoller.ejs", { style : "/css/diceRoller.css" });
});

app.listen(3000);