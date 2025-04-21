import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Style from './Cadastro.module.css';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      nome,
      email,
      senha
    };

    // Requisição para a API de cadastro (API já configurada para cadastro de usuários)
    axios.post('http://localhost:8080/api/cadastro', newUser)
      .then((response) => {
        navigate('/login');  // Redireciona para a página de login após cadastro
      })
      .catch((error) => {
        setError('Erro ao cadastrar usuário.');
        console.error('Erro no cadastro', error);
      });
  };

  return (
    <div className={Style.container}>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required 
          />
        </div>
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
        <button type="submit">Cadastrar</button>
      </form>
      <p>Já tem uma conta? <a href="/login">Faça login aqui</a></p>
    </div>
  );
}
