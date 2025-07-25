import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async(req, res)=>{
    try {
        const {name, email, password, role} = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success:false,
                message:"All input fields are required"
            })
        }
        const user = await User.findOne({email})
        if (user) {
            return res.status(400).json({
                success:false,
                message:"user already account this email"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            name,
            email,
            password:hashedPassword,
            role
        });
        return res.status(201).json({
            success:true,
            message:"Account register successfuly"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"error to register account"
        })
    }
}

export const login = async(req, res)=>{
    try {
        const {email, password} = req.body
        if (!email || !password) {
            return res.status(400).json({
                success:false,
                message:"All input fields are required"
            })
            
        }
        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({
                success:false,
                message:"Wrong email and password"
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"wrong email and password"
            })
        }
        const token  = jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:"1d"})
        return res.cookie('token', token,{httpOnly:true, sameSite:'strict', maxAge:1*24*60*60*1000}).json({
            message:`welcome back ${user.name}`,
            success:true,
            user
        })
        
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            success:false,
            message:"error to login"
        })
    }
}

export const logout = async(__, res)=>{
    try {
        return res.status(200).cookie("token", "",{maxAge:0}).json({
            message:"log out successfully",
            success:true
        })
        
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            success:false,
            message:"error to logout"
        })
    }

}