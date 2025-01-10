export const logMiddleware = function(req, res, next){
    const date = new Date();
    const path = req.path;
    console.log(`${date.toISOString()} - ${req.ip} - ${req.path}`);
    next();
}