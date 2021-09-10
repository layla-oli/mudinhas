import React, { useEffect } from 'react';
import Produto from '../components/Produto';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, produtos } = productList;
    useEffect(() => { //função executada uma única vez, quando o componente é renderizado
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox> //enquanto estiver carregando, usa o componente LoadingBox
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>//se ouve um erro, usa o componente MessageBox
                //se nenhum do dois acontecer, renderiza os produtos
            ) : (<div className="row center">
                {produtos.map((produto) => (
                    <Produto key={produto._id} produto={produto}></Produto>
                ))}
            </div>)
            }
        </div>
    )
}