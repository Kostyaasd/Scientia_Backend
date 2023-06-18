import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import router from './router/user_router.js'
import postRouter from './router/post_router.js'
const app = express()

app.use(express.json())


app.use('/api', router);
app.use('/api', postRouter);

app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}.`)
  })
