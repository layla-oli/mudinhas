import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import {
  isAuth,
  payOrderEmailTemplate,
  transporter,
} from '../utils.js';
const orderRouter = express.Router();

orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Carrinho está vazio!' });
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id, // podemos acessar o user da função isAuth
      });
      const createdOrder = await order.save(); //salva o pedido no bd
      res
        .status(201)
        .send({ message: 'Novo pedido criado', order: createdOrder }); //passa o pedido para o frontend
    }
  })
);
orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      if (order) {
        res.send(order);
      } else {
        res.status(404).send({ message: 'Pedido não encontrado' });
      }
    })
  );
  orderRouter.post(
    '/:id/pay',
    expressAsyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
      const user = await User.findById(order.user);
      if (order) {
        order.isPaid = true;
        const updatedOrder = await order.save();
        const mailOptions = {
          from: 'Mudinhas e afins <mudinhaseafins@gmail.com>',
          to: `${user.email}`,
          subject: `Novo pedido ${order._id}`,
          html: payOrderEmailTemplate(order,user),
          };
          transporter.sendMail(mailOptions, 
            (error, body) => {
              if (error) {
                console.log(error);
              } else {
                console.log(body);
              }
            }
          );
        res.send({ message: 'Pedido pago e email enviado', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Pedido não encontrado' });
      }
    })
  );
  
  

export default orderRouter;