import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import Axios from 'axios';

export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [nome_popular, setNomePopular] = useState('');
  const [nome_cientifico, setNomeCientifico] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  const [estoque, setEstoque] = useState('');
  const [detalhes, setDetalhes] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setNomePopular(product.nome_popular);
      setNomeCientifico(product.nome_cientifico);
      setPreco(product.preco);
      setImagem(product.imagem);
      setEstoque(product.estoque);
      setDetalhes(product.detalhes);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        nome_popular,
        nome_cientifico,
        preco,
        imagem,
        estoque,
        detalhes,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImagem(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Alterando o produto {productId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="nome_popular">Nome popular</label>
              <input
                id="nome_popular"
                type="text"
                placeholder="Digite o nome popular"
                value={nome_popular}
                onChange={(e) => setNomePopular(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="nome_popular">Nome científico</label>
              <input
                id="nome_cientifico"
                type="text"
                placeholder="Digite o nome científico"
                value={nome_cientifico}
                onChange={(e) => setNomeCientifico(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="preco">Preço</label>
              <input
                id="preco"
                type="text"
                placeholder="Digite o preço"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imagem">Imagem</label>
              <input
                id="imagem"
                type="text"
                placeholder="Digite o caminho da imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Arquivo de Imagem</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label htmlFor="estoque">Estoque</label>
              <input
                id="estoque"
                type="text"
                placeholder="Digite o estoque"
                value={estoque}
                onChange={(e) => setEstoque(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="detalhes">Detalhes</label>
              <textarea
                id="detalhes"
                rows="5"
                type="text"
                placeholder="Digite os detalhes"
                value={detalhes}
                onChange={(e) => setDetalhes(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Alterar
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
