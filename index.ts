import productRoutes from "./src/api/routes/index.routes";
import httpLogger from './src/middlewares/httpLogger';
import logger from './src/middlewares/logger';
import config from './src/config/config'
import express from 'express'

// Create express app
const app = express()

// Middlewares
app.use(express.json())
app.use(httpLogger)

// Set configs
app.set('port', config.PORT)

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
