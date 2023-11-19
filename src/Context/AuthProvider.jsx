import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Crie o contexto de autenticação
const AuthContext = createContext();

// Função auxiliar para verificar a existência de um token de cookie
const checkToken = () => {
  return Cookies.get('token'); // Verifica se o token de cookie existe
};

// Componente de provedor de autenticação
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(checkToken()); // Inicializa com base nos cookies

  // Verifica os cookies de token periodicamente
  useEffect(() => {
    const interval = setInterval(() => {
      const tokenExists = checkToken();
      if (isAuthenticated !== tokenExists) {
        setIsAuthenticated(tokenExists);
      }
    }, 10000); // Verifica a cada 10 segundos (ajuste conforme necessário)

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  // Função para fazer logout
  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar o contexto de autenticação
export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
