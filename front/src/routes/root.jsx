import React, { useState } from 'react';
import './styleCad.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((username === 'Arthur' && password === '1234')) {
      setLoginSuccess(true);
      setError('');
    }
    else if((username === 'Filipe' && password === '4321')) {
      setLoginSuccess(true);
      setError('');
    }
    else if((username === 'Diogo' && password === '5678')) {
      setLoginSuccess(true);
      setError('');
    }
    else {
      setError('Usuário ou senha inválidos');
      setLoginSuccess(false);
    }
    
  };
  return (
    <div id="quest">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username" className="label">Usuário:</label><br></br>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Senha:</label>
          <div className="password-input">
            <input
              type="text"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
            />
          </div>
        </div><br></br>
        <div className="form-group">
          <button type="submit" className="botao">Entrar</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <a href={`/contacts/3`}>{loginSuccess && <p className="success-message">Login bem-sucedido! Clique Aqui</p>}</a>
      </form>
    </div>
  );
};

export default Login;