import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import User from './models/User.js'
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)

const app = express()
app.use(cors())
app.use(express.json())



app.get("/", (req,res)=>{
  res.json('test ok')
})

app.post("/register",async (req,res)=>{
  const {username, password} = req.body
  try{
    const userDoc = await User.create({
      username, 
      password: bcrypt.hashSync(password,salt)})
  res.json(userDoc)
  }catch(e){
    res.status(400).json(e)
  }
})

mongoose.connect("mongodb://127.0.0.1:27017/Blog")
.then(()=>{
  console.log("Database Successfully Connected");
  app.listen(4000, ()=>{
    console.log("Server Running on port 4000");
  })
})
.catch((err)=>{
  console.log(err);
})

