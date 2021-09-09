import React from 'react';
import data from '../data';
import Produto from '../components/Produto';

export default function HomeScreen(){
    return (
    <div className="row center"> 
        {data.produtos.map((produto)=>(
        <Produto key={produto.id} produto={produto}></Produto>
        ))}
            
        </div>
    )
}