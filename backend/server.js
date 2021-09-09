import express from 'express';
import data from '../frontend/src/data.mjs'; /*mudar a localização de data.js dps*/

const app = express();

app.get('/api/produtos/:id', (req, res) => {
  const product = data.produtos.find((x) => x.id === Number(req.params.id));
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Produto Não Encontrado' });
  }
});
app.get('/api/produtos', (req, res) => {
  res.send(data.produtos);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000; //define a variavel de ambiente PORT com o valor 5000
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});