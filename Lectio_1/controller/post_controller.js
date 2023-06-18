import db from '../db.js'
class PostController{
    async createPost(req, res){
        const {userid,title,post} = req.body
        const newPost = await db.query('INSERT INTO "Post" (user_id,title,post) values ($1,$2,$3) RETURNING *',[userid,title,post])
        res.json(newPost.rows[0])
    }

    async getPostUser(req, res){
        const id = req.query.id
        const post =await db.query('SELECT * FROM "Post" as p JOIN "User" as u ON u.id  = p.user_id;')
        console.log(post.rows)
res.json(post.rows)
    } 


}

export default new PostController()