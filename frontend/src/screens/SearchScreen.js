import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';

export default function SearchScreen(props) {
  const { nome = '', ordem = ''} = useParams(); //usado para pegar os parametros da rota atual, pegando o parametro nome especificamente
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts({ nome: nome , ordem: ordem}));
  }, [dispatch, nome, ordem]);
  //Função para retornar a url adequada ao filtro a ser aplicado
  const getFilterUrl = (filter) => {
    const filterNome = filter.nome || nome;
    const filterOrdem = filter.ordem;
    if(!filterNome && filterOrdem!=="nenhum")
    return `/search/nome/ordem/${filterOrdem}`;
    if (!filterNome && filterOrdem=="nenhum")
    return `/search/nome/`;
    return `/search/nome/${filterNome}/ordem/${filterOrdem}`;
  };

  return (
    <div>
      <div className="row">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>{products.length} Resultados</div>
        )}
        <div>
          Ordenar por:{' '}
          <select
            value={ordem}
            onChange={(e) => {
              props.history.push(getFilterUrl({ ordem: e.target.value }));
            }}
          >
            <option value="nenhum">Nenhum filtro</option>
            <option value="maior">Maiores preços primeiro</option>
            <option value="menor">Menores preços primeiro</option>
            <option value="az">Nome Popular: A-Z</option>
            <option value="za">Nome Popular: Z-A</option>
          </select>
        </div>
      </div>
      <div className="row top">
        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>Nenhum Produto Encontrado</MessageBox>
              )}
              <div className="row center">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}