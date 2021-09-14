import Axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_UPDATE_ITEM,
} from '../constants/cartConstants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        imagem: data.imagem,
        nome_popular: data.nome_popular,
        nome_cientifico: data.nome_cientifico,
        preco: data.preco,
        estoque: data.estoque,
        detalhes: data.detalhes,
        qty

      },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  }
  catch (erro) {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  }
};
export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};
export const updateItemCart = (item) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get(`/api/products/${item.product}`);
    if (data.estoque === 0)
      dispatch({ type: CART_REMOVE_ITEM, payload: item.product });
    else if (item.estoque !== data.estoque) {
      dispatch({
        type: CART_UPDATE_ITEM,
        payload: {
          product: data._id,
          imagem: data.imagem,
          preco: data.preco,
          nome_popular: data.nome_popular,
          nome_cientifico: data.nome_cientifico,
          estoque: data.estoque,
          detalhes: data.detalhes,
          qty: item.qty <= data.estoque ? item.qty : data.estoque
        },
      });
  }
}
  catch (erro) {
    dispatch({ type: CART_REMOVE_ITEM, payload: item.product });
  }
};