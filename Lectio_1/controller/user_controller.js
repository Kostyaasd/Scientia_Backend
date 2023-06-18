import db from '../db.js'
class UserController{
    async createUser(req, res){
        const{username, password, email} = req.body
        
       const newPerson = await db.query(`INSERT INTO "User" (user_name, password, email) values ($1, $2, $3) RETURNING *`, [username, password, email])
      
       res.json(newPerson.rows[0])

    }
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM "User"')
        res.json(users.rows)
        
    }
    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM "User" where id = $1',[id])
        res.json(user.rows[0])
    }
    async updateUser(req, res){
        const id = req.params.id
        const {user_name, email} = req.body
        const user = await db.query('UPDATE "User" set user_name = $1, email = $2 where id = $3 RETURNING *', [user_name, email, id])
       console.log(user)
        res.json(user.rows)
    }
    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM "User" where id = $1',[id])
        res.json(user.rows[0])
    }
}

// module.exports = new UserController ()
export default new UserController()
