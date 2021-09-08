import React from 'react';
import data from './data';
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
            <div key = {produto.id} className="card">
            <a href={`/produto/${produto.id}`}>
                <img className="medium" src={produto.imagem} alt={produto.id}/>
            </a>
            <div className="card-body">
             <a href={`/produto/${produto.id}`}>
                 <h3>{produto.nome_popular}</h3>                        
                 <h2><i>{produto.nome_cientifico}</i></h2>
             </a>
            </div>
            <div className="price">
            <h1> R$:{produto.preco}</h1>
            </div> 
            <div className="stock">
             <h1>Estoque:{produto.estoque}</h1>
            </div> 
         </div>  
        ))}
            
        </div>
    </main>
    <footer>

    </footer>
</div>
  );
}

export default App;
