import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Style from './Login.module.css';

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  // Verifica se há token de registro bem-sucedido
  useEffect(() => {
    if (location.state?.registrationSuccess) {
      setError('Cadastro realizado com sucesso! Faça login para continuar.');
    }
  }, []);

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
      const response = await axios.post('http://localhost:8080/api/login', {
        email: formData.email,
        senha: formData.password
      });
      
      // Armazena tokens
      localStorage.setItem('usuarioId', response.data.usuarioId);
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('userEmail', formData.email);
      
      // Atualiza estado e redireciona
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                          error.message || 
                          'Serviço indisponível. Tente novamente mais tarde.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={Style.authContainer}>
      <div className={Style.authCard}>
        <h1 className={Style.authTitle}>Bem-vindo de volta</h1>
        <p className={Style.authSubtitle}>Faça login para acessar sua conta</p>
        
        <form className={Style.authForm} onSubmit={handleSubmit}>
          {error && <div className={Style.authError}>{error}</div>}
          
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
              autoComplete="username"
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
                autoComplete="current-password"
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
            <div className={Style.formHelp}>
              <Link to="/recuperar-senha" className={Style.helpLink}>Esqueceu a senha?</Link>
            </div>
          </div>
          
          <button 
            type="submit" 
            className={Style.authButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className={Style.spinner}></span> Carregando...
              </>
            ) : 'Entrar'}
          </button>
        </form>
        
        <div className={Style.authFooter}>
          <p>Não tem uma conta? <Link to="/cadastro" className={Style.authLink}>Cadastre-se</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;