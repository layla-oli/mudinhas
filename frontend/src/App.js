import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import { signout, clearError } from './actions/userActions';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen.js';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';


function App() {
  const cart = useSelector((state) => state.cart);//hook para pegar o estado do carrinho no store
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);//hook para pegar o estado do login do usuário no store
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  const homeHandler = () => {
    dispatch(clearError());
  };
  const cartHandler = () => {
    dispatch(clearError());
  };
  return (
    <BrowserRouter>
      <div className="gridBox">
        <header className="row">
          <div>
            <Link className="brand" to="/" onClick={homeHandler}>Mudinhas e afins</Link>
            <br /><span><Link className="subtitle" to="/" onClick={homeHandler}>Horto online</Link></span>
          </div>
          <div>
            <Link to="/cart" onClick={cartHandler}>
              Carrinho
              {cartItems.length > 0 && ( //Mostra o número de itens q tem no carrinho se houver item no carrinho
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.nome} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sair
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Entrar</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Produtos</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Pedidos</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Usuários</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route> {/*Usa-se o ? para dizer que por o id é opcional, ou seja, sem o id vai para o carrinho */}
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
        </main>
        <footer>

        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
