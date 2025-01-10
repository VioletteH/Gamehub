// IMPORTS
import express from 'express';
import games from "./data/games.json" with { type: "json" };
import {router as gameRouter} from "./routes/gameRouter.js";
import {router as homeRouter} from "./routes/homeRouter.js";
import { globalGamesMiddleware } from "./middlewares/globalGamesMiddleware.js";
import { error404Middleware } from "./middlewares/error404Middleware.js";
import { logMiddleware } from "./middlewares/logMiddleware.js";
const port = 3000;

// PARAMETRE SERVER
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

// MIDDLEWARES
app.use(express.static("public"));
app.use(logMiddleware);
app.use(globalGamesMiddleware);
app.use(gameRouter); 
app.use(homeRouter); 
app.use(error404Middleware);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});