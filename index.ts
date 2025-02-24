import express from 'express'
import dotenv from 'dotenv'
import config from './src/config/config'

// Init dotenv
dotenv.config()

// Create express app
const app = express()

// Middlewares
app.use(express.json())

// Set configs
app.set('port', config.PORT)

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${config.PORT}`)
})
