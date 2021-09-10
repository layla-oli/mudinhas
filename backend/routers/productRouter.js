import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.mjs';
import Product from '../models/productModel.js';

const productRouter = express.Router();
//a partir de /api/products
productRouter.get(
  '/',// /api/products/ recupera os products do bd
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

productRouter.get(
  '/seed',// /api/products/seed insere os produtos do data.mjs no bd
  expressAsyncHandler(async (req, res) => {//expressAsyncHandler permite capturar erros
    // await Product.remove({});//deletar todos os products
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

productRouter.get(
  '/:id',///api/products/:id recupera um product do bd a partir de seu id 
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Produto não encontrado!' });
    }
  })
);

export default productRouter;