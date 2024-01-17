import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import jwt from 'jsonwebtoken'
import { errorHandler } from "../utils/error.js"

export const signup =async(req,res,next)=>{
   const {userName,email,password} = req.body
   const hashPassword =  bcryptjs.hashSync(password,10)
   const newUser = new User({userName,email,password:hashPassword})

   try {
    await newUser.save()
    res.status(201).send('User created')
   } catch (error) {
    
    //res.status(500).send("Error message")
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
    //next(errorHandler)
   }
  
}

export const signin = async(req,res,next)=>{
   const {email,password} = req.body

   try {
      const validUser = await User.findOne({email}) 
      if(!validUser) return res.status(404).send('Invalid credentials')

      const validPassword =  bcryptjs.compareSync(password,validUser.password)
      if(!validPassword) return res.status(404).send("Wrong credentials")

      const token = jwt.sign({id:validUser._id},process.env.SECRET_KEY)
      const { password: hashedPassword, ...rest } = validUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
        .status(200)
        .json(rest);
      
      
   } catch (error) {
       //res.status(500).send("Error message")
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
    //next(errorHandler)
   }
  

}