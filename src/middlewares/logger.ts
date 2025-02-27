import winston from 'winston'
import { MongoDB } from 'winston-mongodb'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
      const environment = process.env.NODE_ENV || 'ENV NOT SET';
      return `[${level}] ${timestamp} [${environment}] ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new MongoDB({
      db: process.env.MONGODB_URI || 'mongodb://localhost:27017/logs',
      collection: 'log',
      level: 'warn', // Min level to store in MongoDB collection
      decolorize: true // true to decolorize console logs
    })
  ]
})

export default logger