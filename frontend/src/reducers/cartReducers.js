import { CART_ADD_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload; //pega o item 
      const existItem = state.cartItems.find((x) => x.product === item.product);//Já existe um item com esse produto?
      if (existItem) {//se o item já existe no carrinho
        return {
          ...state,//não muda as outras propriedades
          cartItems: state.cartItems.map((x) =>//substitui o item antigo pelo novo
            x.product === existItem.product ? item : x
          ),
        };
      } else { // se o item não existe no carrinho, adiciona-o ao carrinho
        return { ...state, cartItems: [...state.cartItems, item] };//concatena o array de itens com o item novo
      }
    default:
      return state;
  }
};