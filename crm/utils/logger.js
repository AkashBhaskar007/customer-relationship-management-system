const winston = require('winston');

const env = process.env.NODE_ENV || 'development';
const isDevelopment = env === 'development';
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};
const level = () => (isDevelopment ? 'debug' : 'http');

winston.addColors(colors);

let format = winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }));

if (isDevelopment) {
    format = winston.format.combine(
        format,
        winston.format.colorize({ all: isDevelopment }),
        winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    );
} else {
    format = winston.format.combine(format, winston.format.json());
}

const transports = [
    // Allow the use the console to print the messages
    new winston.transports.Console(),
];

const logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
});

module.exports = logger;
