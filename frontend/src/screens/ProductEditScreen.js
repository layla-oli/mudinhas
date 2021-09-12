import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

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
  const dispatch = useDispatch();
  useEffect(() => {
    if (!product || product._id !== productId) {
      dispatch(detailsProduct(productId));
    } else {
      setNomePopular(product.nome_popular);
      setNomeCientifico(product.nome_cientifico);
      setPreco(product.preco);
      setImagem(product.imagem);
      setEstoque(product.estoque);
      setDetalhes(product.detalhes);
    }
  }, [product, dispatch, productId]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Alterando o produto {productId}</h1>
        </div>
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