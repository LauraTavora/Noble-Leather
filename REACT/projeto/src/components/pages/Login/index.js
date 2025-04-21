import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Style from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Requisição para a API de login
    axios.post('http://localhost:8080/api/auth/login', { email, senha })
      .then((response) => {
        // Salva os dados do usuário no localStorage (usuarioId e token)
        localStorage.setItem('usuarioId', response.data.usuarioId); // Salva o ID do usuário
        localStorage.setItem('authToken', response.data.token);  // Salva o token
        navigate('/home');  // Redireciona para a Home após o login
      })
      .catch((error) => {
        setError('Credenciais inválidas.');
        console.error('Erro no login', error);
      });
  };

  return (
    <div className={Style.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Senha</label>
          <input 
            type="password" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            required 
          />
        </div>
        {error && <p className={Style.error}>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
      <p>Não tem uma conta? <a href="/cadastro">Cadastre-se aqui</a></p>
    </div>
  );
}
