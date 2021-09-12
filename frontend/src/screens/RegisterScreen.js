import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';
    /* ERRO AQUI: a msg de erro persite msm se voltarmos a página inicial, e devido a isso para redirecionar, clicamos duas vezes no botão */
    const userRegister = useSelector((state) => state.userRegister);//hook para pegar o estado do registro de usuário no store
    const { userInfo, loading, error } = userRegister;
    const dispatch =  useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (senha !== confirmaSenha) {
            alert('Senhas não coincidem!');
        } else {
            dispatch(register(nome, email, senha));
            /*if (userInfo && !error) {
                props.history.push(redirect);
            }*/
        }
    };
   useEffect(() => {
        if (userInfo && !error ) {
            props.history.push(redirect);
        }

      }, [dispatch, error, props.history, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Criar conta</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"
                        required
                        onChange={(e) => setNome(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite uma senha"
                        required
                        onChange={(e) => setSenha(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirmar senha:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirme a senha"
                        required
                        onChange={(e) => setConfirmaSenha(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Registrar
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Já possui uma conta?{' '}
                        <Link to={`/signin?redirect=${redirect}`}>Entrar</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
