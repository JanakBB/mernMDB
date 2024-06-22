function errorHandlor (error, req, res, next) {
    let statusCode = error.status || 500;
    let errMessage = error.message || "Internal server error";
    res.status(statusCode).send({error: errMessage, stack: error.stack});
}

module.exports = errorHandlor;