// IMPORTS
import express from 'express';
import games from "./data/games.json" with { type: "json" };
import {router as gameRouter} from "./routes/gameRouter.js";
import {router as homeRouter} from "./routes/homeRouter.js";

// PARAMETRE SERVER
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.listen(3000);

// MIDDLEWARES
app.use(express.static("public"));

app.use((req, res, next) => {
    res.locals.games = games;
    next();
});

app.use(gameRouter); 
app.use(homeRouter); 

    

app.use((req, res, next) => {
    res.status(404).render("404.ejs");
    next();
});

app.use((req, res, next) => {
    console.log(req.get('referer'));
    console.log(req.ip);
    next();
});