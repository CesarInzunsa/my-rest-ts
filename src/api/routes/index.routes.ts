import { Router, Application } from 'express'
import config from '../../config/config'
import productRouter from './product.routes'

const RouterAPI = (app: Application): Router => {
  const router = Router()
  const api = config.API_PREFIX

  app.use(api, router)

  router.use('/products', productRouter)

  return router
}

export default RouterAPI
