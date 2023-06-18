import { Router } from 'express'
const router = new Router()
import PostController  from '../controller/post_controller.js'


router.post('/pos',PostController.createPost)
router.get('/pos',PostController.getPostUser)

export default router;   