import express from 'express'
import config from './src/config/config'
import winston from 'winston'
import { MongoDB } from 'winston-mongodb'

// Create express app
const app = express()

// Middlewares
app.use(express.json())

// Set configs
app.set('port', config.PORT)

// Configure Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'HH:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
      const environment = process.env.NODE_ENV || 'ENV NOT SET'
      return `[${level}] ${timestamp} [${environment}] ${message}`
    })
  ),
  transports: [
    new winston.transports.Console(),
    new MongoDB({
      db: process.env.MONGODB_URI || 'mongodb://localhost:27017/logs',
      collection: 'log',
      level: 'info'
    })
  ]
})

// Use logger in express
app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.url}`)
  next()
})

app.listen(app.get('port'), () => {
  const serverInfo = {
    name: 'My RESTful API Server',
    host: config.HOST,
    port: app.get('port'),
    apiPrefix: config.API_PREFIX
  }
  const message = `${serverInfo.name} is running on http://${serverInfo.host}:${serverInfo.port}${serverInfo.apiPrefix}`
  logger.info(message)
})
