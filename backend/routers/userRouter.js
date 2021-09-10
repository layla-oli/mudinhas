import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.mjs';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';


const userRouter = express.Router();

userRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => { //expressAsyncHandler permite capturar erros 
        //await User.remove({}); //deleta tds usuarios
        const createdUsers = await User.insertMany(data.users);
        res.send({ createdUsers });
    })
);
userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
      const user = await User.findOne({ email: req.body.email }); //pega o usuário que tenha o email informado
      if (user) {
        if (bcrypt.compareSync(req.body.senha, user.senha)) { //verficar se senha está correta
          res.send({
            _id: user._id,
            nome: user.nome,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user), //criando um token para identificar o usuário
          });
          return;
        }
      }
      res.status(401).send({ message: 'E-mail e/ou senha incorretos' });
    })
  );
  

export default userRouter;