import User from "../models/user.model.js"

export const test = async(req,res)=>{
    const user = await User.find()
    res.send(user)
}