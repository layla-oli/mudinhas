import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_EMPTY,
  CART_UPDATE_ITEM,
} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload; //pega o item 
      const existItem = state.cartItems.find((x) => x.product === item.product);//Já existe um item com esse product?
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
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
        //deixa apenas os items que não forem do product deletado
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case CART_EMPTY:
      return { ...state, cartItems: [] };
    case CART_UPDATE_ITEM:
      const itemUpdated = action.payload; //pega o item atualizado
        return {
          ...state,//não muda as outras propriedades
          cartItems: state.cartItems.map((x) =>//substitui o item antigo pelo novo
            x.product === itemUpdated.product ? itemUpdated : x
          ),
        };
    default:
      return state;
  }
};

