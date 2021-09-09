import React from 'react';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  var qty = props.location.search
    ? Number(props.location.search.split('=')[1])//pega o que está depois do ? na url, tira o = e pega somente o número
    : 1;//caso não tenha um número definido para qunatidade na url, põe a quantidade como 1
  if (qty <= 0)// se qtd for menor ou igual a 0, seta qtd para 1
    qty = 1;
  else if (qty > 100)//se for maior que 100, seta p 100
    qty = 100; 
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {productId} Quantidade: {qty}
      </p>
    </div>
  );
}