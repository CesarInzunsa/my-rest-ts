import winston from 'winston'
import { MongoDB } from 'winston-mongodb'

const consoleTransport = new winston.transports.Console({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message, ...meta }) => {
            const environment = process.env.NODE_ENV || 'ENV NOT SET'
            if (message === 'HTTP Request') return '' // Filter out HTTP request logs
            return `[${level}] ${timestamp} [${environment}] ${message} ${JSON.stringify(meta)}`
        })
    )
})

const mongoTransport = new MongoDB({
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/logs',
    collection: 'log',
    level: 'warn', // Only save warning and above to MongoDB
    decolorize: true,
    tryReconnect: true,
})

const logger = winston.createLogger({
    level: 'info',
    transports: [consoleTransport, mongoTransport]
})

mongoTransport.on('connected', () => {
    logger.info('Connected to MongoDB for logging');
})

export default logger