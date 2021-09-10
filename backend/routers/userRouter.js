import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.mjs';
import User from '../models/userModel.js';


const userRouter = express.Router();

userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => { //expressAsynHandler permite capturar erros 
        //await User.remove({}); //deleta tds usuarios
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
    })
);

export default userRouter;