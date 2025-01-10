import games from "../data/games.json" with { "type" : "json" }
export const globalGamesMiddleware = function(req, res, next){
    res.locals.games = games;
    next();
}