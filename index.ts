import productRoutes from "./src/api/routes/index.routes";
import logger from './src/middlewares/logger';
import config from './src/config/config'
import express from 'express'

// Create express app
const app = express()

// Middlewares
app.use(express.json())

// Set configs
app.set('port', config.PORT)

// Use logger in express
app.use((req, _res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next()
})

// Routes
productRoutes(app)

app.listen(app.get('port'), () => {
  const serverInfo = {
    name: 'My RESTFUL API Server',
    host: config.HOST,
    port: app.get('port'),
    apiPrefix: config.API_PREFIX
  }
  const message = `${serverInfo.name} is running on ${serverInfo.host}:${serverInfo.port}${serverInfo.apiPrefix}`
  logger.info(message)
})
