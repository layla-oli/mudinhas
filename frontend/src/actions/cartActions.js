import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/produtos/${productId}`);
  dispatch({
    type: CART_ADD_ITEM, //AQUI
    payload: {
        product: data.id,
        imagem: data.imagem,
        nome_popular: data.nome_popular,
        nome_cientifico: data.nome_cientifico,
        preco: data.preco,
        estoque: data.estoque,
        detalhes: data.detalhes, //?
        qty
        
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};