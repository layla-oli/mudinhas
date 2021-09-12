import jwt from 'jsonwebtoken';
import mg from 'mailgun-js';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      nome: user.nome,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET, //chave usada para gerar os tokens
    {
      expiresIn: '1h',
    }
  );
};
//função middleware: tem acesso ao objeto de solicitação (req), o objeto de resposta (res),
//e a próxima função de middleware no ciclo solicitação-resposta do aplicativo
export const isAuth = (req, res, next) => { //checa se o usuário está autenticado 
  const authorization = req.headers.authorization; // pega o campo authorization do cabeçalho da requisição
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX => XXXXXX
    jwt.verify( //descriptografando o token
      token,
      process.env.JWT_SECRET, //chave usada para gerar os tokens
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Token Inválido' });
        } else {
          req.user = decode; //decode contém os dados descriptografados do token: os dados do usuário
          next(); //chama a próxima função middleware, passada no parâmetro
        }
      }
    );
  } else {
    res.status(401).send({ message: 'Nenhum Token' });
  }
};
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Token de Admin inválido' });
  }
};
export const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMIAN,
  });
//Gera um email a partir de um pedido
export const payOrderEmailTemplate = (order) => {
  return `<h1>Obrigado por comprar conosco! </h1>
  <p>
  Olá, ${order.user.name},</p>
  <p>Seu pedido foi processado com sucesso.</p>
  <h2>[Pedido ${order._id}] (${order.createdAt.toString().substring(0, 10)})</h2>
  <table>
  <thead>
  <tr>
  <td><strong>Produto</strong></td>
  <td><strong>Quantidade</strong></td>
  <td><strong align="right">Preço</strong></td>
  </thead>
  <tbody>
  ${order.orderItems
    .map(
      (item) => `
    <tr>
    <td>${item.nome_popular}</td>
    <td align="center">${item.qty}</td>
    <td align="right"> $${item.preco.toFixed(2)}</td>
    </tr>
  `
    )
    .join('\n')}
  </tbody>
  <tfoot>
  <tr>
  <td colspan="2">Preço total dos Items:</td>
  <td align="right"> R$${order.itemsPrice.toFixed(2)}</td>
  </tr>
  <tr>
  <td colspan="2">Preço do Frete:</td>
  <td align="right"> R$${order.shippingPrice.toFixed(2)}</td>
  </tr>
  <tr>
  <td colspan="2"><strong>Preço Total:</strong></td>
  <td align="right"><strong> $${order.totalPrice.toFixed(2)}</strong></td>
  </tr>
  <tr>
  <td colspan="2">Método de Pagamento:</td>
  <td align="right">${order.paymentMethod}</td>
  </tr>
  </table>
  <h2>Endereço de envio</h2>
  <p>
  ${order.shippingAddress.fullName},<br/>
  ${order.shippingAddress.address},<br/>
  ${order.shippingAddress.city},<br/>
  ${order.shippingAddress.country},<br/>
  ${order.shippingAddress.postalCode}<br/>
  </p>
  <hr/>
  <p>
  Obrigado por ser nosso cliente!
  </p>
  `;
};
