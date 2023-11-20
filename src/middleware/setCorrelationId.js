const setCorrelationId = (req, res, next)=>{
    const key = "x-correlation-id";
    const correlationId = req.headers[key] || Date.now().toString();
    // set req headers
    req.headers[key] = correlationId;
    // set res headers
    res.set(key, correlationId);
    next();
}

module.exports = setCorrelationId;