const authMiddleware = (req, res, next) => {
    console.info(req)
    next()
} 

module.exports = authMiddleware;