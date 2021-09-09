import React from 'react';
import data from '../data';

export default function ProductScreen(props){
    const produto=data.produtos.find(x => x.id === props.match.params.id)
    if(!produto){
        return <div> Produto não encontrado</div>
    }
    return( 
    <div>
        <div className="row">
            <div className="col-2">
                <img className="large" src={produto.img} alt={produto.nome_popular}></img>
            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <h1>{produto.nome_popular}</h1>
                    </li>
                    <li>
                        Preço: R${produto.preco}
                    </li>
                    <li>
                        Sobre: <p>{produto.detalhes}</p>
                    </li>
                </ul>
            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Preço</div>
                                <div className="price">R${produto.preco}</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Estoque</div>
                                <div>{produto.estoque}</div>
                            </div>
                        </li>
                        <li>
                            <button className="primary block">Adicionar</button>
                        </li>
                    </ul>
                </div>
                </div>
        </div>
    </div>
        
    )
}