const { format, transports} = require("winston");
const { json, timestamp, combine} = format;;
require("winston-daily-rotate-file");

// Elastic Transport
const {ElasticsearchTransport} = require("winston-elasticsearch");
const elasticSearchTransport = new ElasticsearchTransport({
    level: "http",
    clientOpts:{node: "http://localhost:9200"},
    indexPrefix: "log-express",
    indexSuffixPattern:"YYYY-MM-DD"
})

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

module.exports ={
    infoFileTransport,
    errorFileTransport,
    consoleTransport,
    elasticSearchTransport
}