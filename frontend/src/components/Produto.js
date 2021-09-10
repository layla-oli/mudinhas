import React from 'react';
import { Link } from 'react-router-dom';

export default function Produto(props) {
  const { produto } = props;
  return (
    <div key = {produto._id} className="card">
            <Link to={`/produto/${produto._id}`}>
                <img className="medium" src={produto.imagem} alt={produto.nome_cientifico}/>
            </Link>
            <div className="card-body">
             <Link to={`/produto/${produto._id}`}>
                 <h3>{produto.nome_popular}</h3>                        
                 <h2><i>{produto.nome_cientifico}</i></h2>
             </Link>
            </div>
            <div className="price">
            <h1> R$:{produto.preco.toFixed(2)}</h1>
            </div> 
            <div className="stock">
             <h1>Estoque:{produto.estoque}</h1>
            </div> 
         </div>  
  );
}