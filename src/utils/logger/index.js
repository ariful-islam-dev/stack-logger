const {createLogger} = require("winston");
const { infoFileTransport, errorFileTransport, consoleTransport, elasticSearchTransport } = require("./transports");
require("winston-daily-rotate-file");




// ElasticSearch transports

const logger = createLogger({
    transports: [
        consoleTransport,
        infoFileTransport,
        errorFileTransport,
        elasticSearchTransport
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