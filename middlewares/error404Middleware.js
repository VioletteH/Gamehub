export const error404Middleware = function(req,res,next){
    const url = req.originalUrl;
    res.status(404).render("404", {url});
}