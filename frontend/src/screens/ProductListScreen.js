import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';

export default function ProductListScreen(props) {
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const productCreate = useSelector((state) => state.productCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        product: createdProduct,
    } = productCreate;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successCreate) {
            dispatch({ type: PRODUCT_CREATE_RESET });
            props.history.push(`/product/${createdProduct._id}/edit`);
        }
        dispatch(listProducts());
    }, [createdProduct, dispatch, props.history, successCreate]);

    const createHandler = () => {
        dispatch(createProduct());
    };
    const deleteHandler = () => {
        /// TODO: dispatch delete action
    };
    return (
        <div>
            <div className="row">
                <h1>Produtos</h1>
                <button type="button" className="primary" onClick={createHandler}>
                    Create Product
                </button>
            </div>
            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME POPULAR</th>
                            <th>NOME CIENTÍFICO</th>
                            <th>PREÇO</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.nome_popular}</td>
                                <td>{product.nome_cientifico}</td>
                                <td>{product.preco}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() =>
                                            props.history.push(`/product/${product._id}/edit`)
                                        }
                                    >
                                        Editar
                                    </button>
                                    <button
                                        type="button"
                                        className="small"
                                        onClick={() => deleteHandler(product)}
                                    >
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}