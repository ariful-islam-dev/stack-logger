const {createLogger, format, transports} = require("winston");
const {colorize, json, timestamp} = format;;

// Console Transport


// File Transport
// ElasticSearch transports

const logger = createLogger({
    level: "info",
    transports: [
        new transports.Console({

        })
    ]
})

module.exports = logger;