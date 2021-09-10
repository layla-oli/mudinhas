import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault(); //previnir  que haja 'refresh' ao apertar o botão 
        // TODO: sign in action
    };
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Fazer login</h1>
                </div>
                <div>
                    <label htmlFor="email">Endereço de e-mail:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite a senha"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Entrar
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        Cliente novo? <Link to="/register">Crie sua conta</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}