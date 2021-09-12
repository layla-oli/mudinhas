import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox> //enquanto estiver carregando, usa o componente LoadingBox
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>//se ouve um erro, usa o componente MessageBox
                //se nenhum do dois acontecer, renderiza os detalhes do produto
            ) : (
                <div>
                    <Link to="/">Voltar</Link>
                    <div className="row top">
                        <div className="col-2">
                            <img className="large" src={product.imagem} alt={product.nome_popular}></img>
                        </div>
                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1>{product.nome_popular}</h1>
                                    <h1>{product.nome_cientifico}</h1>
                                </li>
                                <li>
                                    Preço: R${product.preco.toFixed(2)}
                                </li>
                                <li>
                                    Sobre: <p>{product.detalhes}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Preço</div>
                                            <div className="price">R${product.preco.toFixed(2)}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Estoque</div>
                                            <div>{product.estoque}</div>
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
        </div>


    )
}