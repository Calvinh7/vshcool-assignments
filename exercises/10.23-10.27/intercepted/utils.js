function explosion(req, res, next) {
    req.explosion = "BOOOOOOOM!!!!";
    next()
}

module.exports = {
    explosion
}
