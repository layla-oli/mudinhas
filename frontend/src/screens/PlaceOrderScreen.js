import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }
  const toPrice = (num) => Number(num.toFixed(2)); // limita em até duas casas decimais e converte para número
  //Calculando preço total dos items
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.preco, 0)
  );
  //Calculando o frete
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10 + 0.25*cart.itemsPrice); //frete grátis acima de 100 reais 
  //Calculando preço total
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice;
 
  const placeOrderHandler = () => {
    // TODO: dispatch place order action
  };
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Informações de Envio</h2>
                <p>
                  <strong>Nome:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>Endereço: </strong> {cart.shippingAddress.address},{cart.shippingAddress.number}, 
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Pagamento</h2>
                <p>
                  <strong>Método:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Items pedidos</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.imagem}
                            alt={item.nome_popular}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.nome_popular}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x R${item.preco} = R${item.qty * item.preco}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Resumo do Pedido</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>R${cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Frete</div>
                  <div>R${cart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Total do Pedido</strong>
                  </div>
                  <div>
                    <strong>R${cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block"
                  disabled={cart.cartItems.length === 0}
                >
                  Finalizar Pedido
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}