const {rateLimit, ipKeyGenerator} = require('express-rate-limit');

const analyzeLimiter = rateLimit({
    windowMs: 60 * 1000, // 15 minutes 
    limit: 5,// Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: "draft-7", 
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    keyGenerator: (req ,res) =>
        req.user?._id?.toString() || ipKeyGenerator(req, res),
    message:
    {
        error:{message: "Too many analyses - please wait a minute and retry."},
    },
});

const authLimiter = rateLimit({
    windowMs:15 * 60 * 1000, // 15 minutes 
    limit: 30,// Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: "draft-7",
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    keyGenerator: (req ,res) => ipKeyGenerator(req, res),
    message:
    {
        error:{message: "Too many auth attemps - please wait a minute and retry."},
    },
});
    
module.exports = { analyzeLimiter, authLimiter };   