import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.mjs';
import Product from '../models/productModel.js';
import {isAdmin, isAuth} from '../utils.js';

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
//Criar Produto
productRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      imagem:'/images/Novo_produto.jpg',
      nome_popular: "Novo produto"+ Date.now(),
      nome_cientifico: "Novo produto" ,
      preco: 0.00,
      estoque: 0,
      detalhes: "detalhes"
    });
    const createdProduct = await product.save();
    res.send({ message: 'Produto criado com sucesso', product: createdProduct });
  })
);
productRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.nome_popular = req.body.nome_popular;
      product.nome_cientifico = req.body.nome_cientifico;
      product.preco = req.body.preco;
      product.imagem = req.body.imagem;
      product.estoque = req.body.estoque;
      product.detalhes = req.body.detalhes;
      const updatedProduct = await product.save();
      res.send({ message: 'Produto alterado com sucesso', product: updatedProduct });
    } else {
      res.status(404).send({ message: 'Produto não encontrado' });
    }
  })
);
productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      const deleteProduct = await product.remove();
      res.send({ message: 'Produto removido com sucesso', product: deleteProduct });
    } else {
      res.status(404).send({ message: 'Produto não encontrado' });
    }
  })
);


export default productRouter;
