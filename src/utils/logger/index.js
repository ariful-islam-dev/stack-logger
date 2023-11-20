const {createLogger, format, transports} = require("winston");
const {colorize, json, timestamp, combine} = format;;
require("winston-daily-rotate-file");

// Console Transport
const consoleTransport = new transports.Console({
    level: "info",
    format: combine( timestamp(), json())
})

// File Transport
const fileTransport=(level="info")=>{
    return new transports.DailyRotateFile({
        level: level || "info",
        format: combine(timestamp(), json()),
        filename: `logs/${level}/${level}-%DATE%.log`|| `logs/info/info-%DATE%.log`,
        zippedArchive: true,
        maxFiles: "14d",
        maxSize: "20m"
    })
}
 const infoFileTransport = fileTransport("info");
 const errorFileTransport = fileTransport("error");
// ElasticSearch transports

const logger = createLogger({
    transports: [
        consoleTransport,
        infoFileTransport,
        errorFileTransport
    ]
})

//Winston Rotate File
// fired when a log file is created
// fileTransport().on('new', (filename) => {});
// // fired when a log file is rotated
// fileTransport().on('rotate', (oldFilename, newFilename) => {});
// // fired when a log file is archived
// fileTransport().on('archive', (zipFilename) => {

// });
// fired when a log file is deleted
// fileTransport().on('logRemoved', (removedFilename) => {});


module.exports = logger;