import React from 'react';
import { BrowserRouter, Link ,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';


function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
    <div className="gridBox">
    <header className="row">
        <div>
            <Link  className="brand" to="/">Mudinhas e afins</Link>
            <br /><span><Link  className="subtitle" to="/">Horto online</Link></span>
        </div>
        <div>
        <Link to="/cart">
              Carrinho
              {cartItems.length > 0 && ( //Mostra o número de itens q tem no carrinho se houver item no carrinho
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/admin-login">Admin</Link>
        </div>
    </header>
    <main>
    <Route path="/cart/:id?" component={CartScreen}></Route> {/*Usa-se o ? para dizer que por o id é opcional, ou seja, sem o id vai para o carrinho */}
    <Route path="/product/:id" component={ProductScreen}></Route>
    <Route path="/" component={HomeScreen} exact></Route>
    
    </main>
    <footer>

    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
