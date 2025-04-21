import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Style from './Cadastro.module.css';

const Cadastro = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Validações
      if (formData.password.length < 6) {
        throw new Error('A senha deve ter pelo menos 6 caracteres');
      }

      // Envia dados para a API
      const response = await axios.post('http://localhost:8080/api/usuario/cadastro', {
        nome: formData.nome,
        email: formData.email,
        senha: formData.password,
        username: formData.nome, // pode usar o mesmo nome
        cpf: '00000000000',      // preencha de forma temporária
        endereco: 'endereco teste',
        cep: '00000000',
        cartao: '0000000000000000',
        cedex: false
      });
      
      // Se o cadastro for bem-sucedido
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('usuarioId', response.data.usuarioId);
        localStorage.setItem('userEmail', formData.email);
        setIsAuthenticated(true);
        navigate('/');  // Redireciona para a página principal
      } else {
        // Redireciona para login com estado de sucesso
        navigate('/login', { state: { registrationSuccess: true } });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                           error.message || 
                           'Erro ao cadastrar. Tente novamente.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={Style.authContainer}>
      <div className={Style.authCard}>
        <h1 className={Style.authTitle}>Crie sua conta</h1>
        <p className={Style.authSubtitle}>Leva menos de 1 minuto</p>
        
        <form className={Style.authForm} onSubmit={handleSubmit}>
          {error && <div className={Style.authError}>{error}</div>}
          
          <div className={Style.formGroup}>
            <label htmlFor="nome" className={Style.formLabel}>Nome completo</label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={formData.nome}
              onChange={handleChange}
              className={Style.formInput}
              required
              autoComplete="name"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div className={Style.formGroup}>
            <label htmlFor="email" className={Style.formLabel}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={Style.formInput}
              required
              autoComplete="email"
              placeholder="seu@email.com"
            />
          </div>
          
          <div className={Style.formGroup}>
            <label htmlFor="password" className={Style.formLabel}>Senha</label>
            <div className={Style.passwordWrapper}>
              <input
                id="password"
                name="password"
                type={passwordShown ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className={Style.formInput}
                required
                minLength="6"
                autoComplete="new-password"
                placeholder="••••••"
              />
              <button 
                type="button" 
                className={Style.showPassword}
                onClick={() => setPasswordShown(!passwordShown)}
                aria-label={passwordShown ? "Ocultar senha" : "Mostrar senha"}
              >
                {passwordShown ? '🙈' : '👁️'}
              </button>
            </div>
            <small className={Style.passwordHint}>Mínimo 6 caracteres</small>
          </div>
          
          <button 
            type="submit" 
            className={Style.authButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className={Style.spinner}></span> Criando conta...
              </>
            ) : 'Cadastrar'}
          </button>
        </form>
        
        <div className={Style.authFooter}>
          <p>Já tem uma conta? <Link to="/login" className={Style.authLink}>Faça login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
