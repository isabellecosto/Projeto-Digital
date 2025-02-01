import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../composable/use-localstorage/use-localstorage';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCredentialsIncorrect, setIsCredentialsIncorrect] = useState<boolean>(false);
  const navigate = useNavigate();
  const saveLocalStorageToken = useLocalStorage('token', '');

  const year = new Date().getFullYear();

  const copyrights = `© ${year} | Digital Store | Desenvolvido por Isinha Costa`;

  const login = async () => {
    setIsLoading(true);
    setIsCredentialsIncorrect(false);

    const userData = { email, password };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/login', userData);

      console.log('Resposta da API:', response.data);

      if (response.status >= 200) {
        const token = response.data.access_token;
        console.log('Token:', token);
        if (token) {
          saveLocalStorageToken.save(token);
          navigate('/');
        } else {
          throw new Error('Token não encontrado na resposta da API');
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setIsLoading(false);
      setIsCredentialsIncorrect(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-pink-600">Olá, bem vindo de volta!</h2>
          <p className="text-pink-500">Informe suas credenciais para acessar o gerenciador.</p>
        </div>
        {isLoading && <div className="progress-bar h-1 bg-pink-500 mb-4"></div>}
        {isCredentialsIncorrect && <div className="text-red-500 mb-4">Credenciais incorretas. Tente novamente.</div>}
        <form onSubmit={(e) => { e.preventDefault(); login(); }}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-pink-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-pink-700">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-pink-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Entrar
          </button>
        </form>
        <div className="text-center mt-6 text-pink-500">
          {copyrights}
        </div>
      </div>
    </div>
  );
};

export default Login;