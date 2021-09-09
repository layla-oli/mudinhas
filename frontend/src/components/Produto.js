import React from 'react';

export default function Produto(props) {
  const { produto } = props;
  return (
    <div key = {produto.id} className="card">
            <a href={`/produto/${produto.id}`}>
                <img className="medium" src={produto.imagem} alt={produto.nome_cientifico}/>
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
  );
}