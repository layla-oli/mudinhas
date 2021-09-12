import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox> //enquanto estiver carregando, usa o componente LoadingBox
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>//se ouve um erro, usa o componente MessageBox
                //se nenhum do dois acontecer, renderiza os detalhes do product
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
                                    Sobre: <p className="detalhes">{product.detalhes}</p>
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
                                    {product.estoque > 0 ?
                                        <>
                                            <li>
                                                <div className="row">
                                                    <div>Quantidade:</div>
                                                    <div>
                                                        <select
                                                            value={qty}
                                                            onChange={(e) => setQty(e.target.value)}
                                                        >
                                                            {//limita até 100 products por vez 
                                                                [...Array(product.estoque > 100 ? 100 : product.estoque).keys()].map(
                                                                    (x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    )
                                                                )}
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={addToCartHandler}
                                                    className="primary block"
                                                >
                                                    Adicionar ao carrinho
                                                </button>
                                            </li>
                                        </>
                                        :
                                        <li>
                                            <div className="danger">
                                                Produto fora de estoque
                                            </div>
                                        </li>

                                    }
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