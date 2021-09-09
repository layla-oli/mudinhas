import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Produto from '../components/Produto';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => { //função executada uma única vez, quando o componente é renderizado
        const fetchData = async () => { //função para pegar os produtos do backend através de requisição
            try {
                setLoading(true);//enquanto n carregar, loading é true
                const { data } = await axios.get('/api/produtos');
                setLoading(false);//dps de carregar, passa a ser false
                setProdutos(data);
            } catch (err) {
                setError(err.message);//se der aglum erro ao carregar os produtos
                setLoading(false);//loading = false
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {loading ? (
                <LoadingBox></LoadingBox> //enquanto estiver carregando, usa o componente LoadingBox
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>//se ouve um erro, usa o componente MessageBox
                //se nenhum do dois acontecer, renderiza os produtos
            ) : (<div className="row center"> 
                {produtos.map((produto) => (
                    <Produto key={produto.id} produto={produto}></Produto>
                ))}
            </div>)
            }
        </div>
    )
}