import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  var qty = props.location.search
    ? Number(props.location.search.split('=')[1])//pega o que está depois do ? na url, tira o = e pega somente o número
    : 1;//caso não tenha um número definido para qunatidade na url, põe a quantidade como 1
  if (qty <= 0)// se qtd for menor ou igual a 0, seta qtd para 1
    qty = 1;
  else if (qty > 100)//se for maior que 100, seta p 100
    qty = 100;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) { //se existir um productId
      dispatch(addToCart(productId, qty)); //add ao carrinho
    }
  }, [dispatch, productId, qty]);
  const removeFromCartHandler = (id) => {
    // delete action
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Carrinho de compras</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            O carrinho está vazio <Link to="/">Ver lista de produtos para comprar </Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.imagem}
                      alt={item.nome_cientifico}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/produto/${item.product}`}>
                      {item.nome_popular}
                      <br /><span>
                        {item.nome_cientifico}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {//limita até 100 produtos por vez 
                        [...Array(item.estoque > 100 ? 100 : item.estoque).keys()].map(
                          (x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          )
                        )}
                    </select>
                  </div>
                  <div>R${item.preco.toFixed(2)}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} unidades) : R$
                {cartItems.reduce((a, c) => a + c.preco * c.qty, 0).toFixed(2)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceder para o CheckOut
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}