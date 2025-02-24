import { Router } from 'express'
import productController from '../controllers/product.controller'
const router = Router()

router.get('/:id', async (req, res) => {
    const { idProduct } = req.params
    const result = await productController.getOneById(idProduct)
    res.status(result.status).json(result)
})

export default router
