import { Router } from 'express'
const router = new Router()
import userController from '../controller/user_controller.js'
// const userController = require('../controller/user_controller.js')

router.post('/user',userController.createUser)
router.get('/users',userController.getUsers)
router.get('/user/:id',userController.getOneUser)
router.put('/user/:id',userController.updateUser)
router.delete('/user/:id',userController.deleteUser)

export default router;