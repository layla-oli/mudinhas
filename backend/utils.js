import jwt from 'jsonwebtoken';

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
      expiresIn: '30d',
    }
  );
};
//função middleware: tem acesso ao objeto de solicitação (req), o objeto de resposta (res),
//e a próxima função de middleware no ciclo solicitação-resposta do aplicativo
export const isAuth = (req, res, next) => { //checa se o usuário está autenticado 
  const authorization = req.headers.authorization; // pega o campo authorization do cabeççho da requisição
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