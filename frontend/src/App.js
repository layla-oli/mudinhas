import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="gridBox">
    <header className="row">
        <div>
            <a className="brand" href="/">Mudinhas e afins</a>
            <a className="subtitle" href="/">Horto online</a>
        </div>
        <div>
            <a href="/carrinho">Carrinho</a>
            <a href="/admin_login">Admin</a>
        </div>
    </header>
    <main>
    <Route path="/produto/:id" component={ProductScreen}></Route>
    <Route path="/" component={HomeScreen} exact></Route>
    
    </main>
    <footer>

    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
