import axios from "axios";
import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../interfaces";
  
  // interfaces
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  interface LoginParams {
    token: string;
    user: User;
  }
  
  interface AuthproviderData {
    logged: boolean;
    login: (params: LoginParams) => void;
    logout: () => void;
  }
  
  //context
  const AuthContext = createContext<AuthproviderData>({} as AuthproviderData);
  
  // provider
  export const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigate = useNavigate();
    const [logged, setLogged] = useState<boolean>(false);
  
    const login = ({ token, user }: LoginParams) => {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setLogged(true);
      navigate("/");
    };
  
    const logout = () => {
      localStorage.clear();
      setLogged(false);
      navigate("/login");
    };
  
    const checkTokenExpiration = () => {
      const user = JSON.parse(localStorage.getItem("user") || "");
      const token = localStorage.getItem("token");
  
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios
        .get(`https://nextfilms-api-production.up.railway.app/users/${user.id}`, headers)
        .then(() => {
          setLogged(true);
          navigate("/");
        })
        .catch(() => {
          logout();
        });
    };
  
    // na montagem da página, checa se existe um token e se ele é válido
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token) checkTokenExpiration();
    }, []);
  
    return (
      <AuthContext.Provider value={{ logged, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext);
  