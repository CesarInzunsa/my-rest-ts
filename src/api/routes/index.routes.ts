import { Router } from 'express'
import config from '../../config/config'
import productRouter from './product.routes'

const RouterAPI = (app: any): Router => {
    const router = Router()
    const api = config.API_PREFIX

    app.use(api, router)

    router.use('/pwa/diaries', productRouter)

    return router
}

export default RouterAPI
