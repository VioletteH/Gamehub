import express from "express";
export const router = express.Router();

router.get("/game/:name", (req, res) => {
    const game = res.locals.games.find((element) => req.params.name === element.name);
    if(!game){
        return res.status(404).render("404.ejs", {url: req.originalUrl});
    }
    res.render(`${game.name}.ejs`, { game });
});