const errorMiddleware = (err, req, res, _next) => {
    res.status(500).json({
        success: false,
        error: err.menssage
    })
}

module.exports = errorMiddleware;