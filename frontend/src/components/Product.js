import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product } = props;
  return (
    <div key = {product._id} className="card">
            <Link to={`/product/${product._id}`}>
                <img className="medium" src={product.imagem} alt={product.nome_cientifico}/>
            </Link>
            <div className="card-body">
             <Link to={`/product/${product._id}`}>
                 <h3>{product.nome_popular}</h3>                        
                 <h2><i>{product.nome_cientifico}</i></h2>
             </Link>
            </div>
            <div className="price">
            <h1> R$:{product.preco.toFixed(2)}</h1>
            </div> 
            <div className="stock">
             <h1>Estoque:{product.estoque}</h1>
            </div> 
         </div>  
  );
}