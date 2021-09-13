import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';



export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);//hook para pegar o estado de login de usuário no store
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);//hook para pegar o estado do carrinho no store
  const { shippingAddress } = cart;
  if (!userInfo) { //Se o usuário não estiver logado, redireciona para tela de login
    props.history.push('/signin');
  }
  //Preenche as informações com os últimos dados inseridos
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [number, setNumber] = useState(shippingAddress.number);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, number })
    );
    props.history.push('/payment');
  };
  function findCEP(ev){
    const {value} = ev.target;
    const cep = value?.replace(/[^0-9]/g, '')
    if(cep?.length !== 8){
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then ((res)=> res.json())
      .then((data) => {
        console.log(data);
        document.getElementById('address').value= data.logradouro + ', ' + data.bairro ;
        document.getElementById('city').value= data.localidade + ',' + data.uf;
        setAddress(data.logradouro + ', ' + data.bairro );
        setCity(data.localidade + ',' + data.uf);
      });
    }
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Endereço para envio</h1>
        </div>
        <div>
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            placeholder="Digite o nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="postalCode">CEP</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Digite o CEP"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            onBlur={(ev)=>findCEP(ev)}
          ></input>
        </div>
        <div>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            placeholder="Digite o endereço"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="number">Número/Quadra,Lote</label>
          <input
            type="text"
            id="number"
            placeholder="Digite o número ou Quadra/Lote do seu endereço"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Cidade e Estado</label>
          <input
            type="text"
            id="city"
            placeholder="Digite a  cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
}