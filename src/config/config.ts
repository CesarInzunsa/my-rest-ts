export default {
  HOST: process.env.HOST ?? '127.0.0.1',
  PORT: process.env.PORT ?? 3000,
  API_PREFIX: process.env.API_PREFIX ?? '/api',
  CONNECTION_STRING: process.env.CONNECTION_STRING ?? 'mongodb://localhost:27017',
  DATABASE: process.env.DATABASE ?? 'test'
}
