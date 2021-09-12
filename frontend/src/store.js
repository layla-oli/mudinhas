import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  productDetailsReducer,
  productListReducer,
  productCreateReducer,
  productUpdateReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  userRegisterReducer,
  userSigninReducer,
} from './reducers/userReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
} from './reducers/orderReducers';


const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo') //se o usuário já se logou em outra vez, e não deslogou, permanece assim
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem('cartItems') //iniciando o carrinho já com os itens armazenados na localStorage do usuário
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : {},
    paymentMethod: 'Pix',
  },
};
//"agrupando" os reducers criados nos arquivos de Reducers
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,

});
//criando o store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;