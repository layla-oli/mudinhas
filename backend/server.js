import express from 'express';
import userRouter from './routers/userRouter.js';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Conexão com o banco de dados
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mudinhas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
});

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req, res) => {
  res.send('Servidor está pronto');
});
app.use((err, req, res, next) => { //Identifica erros ocorridos e envia uma msg de erro 
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000; //Usa o valor da variavel de ambiente PORT se exitir, ou 5000 se não existir
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
