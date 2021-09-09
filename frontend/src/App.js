import React from 'react';
import data from './data';
import Produto from './components/Produto';
function App() {
  return (
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
        <div className="row center"> 
        {data.produtos.map((produto)=>(
        <Produto key={produto.id} produto={produto}></Produto>
        ))}
            
        </div>
    </main>
    <footer>

    </footer>
</div>
  );
}

export default App;
