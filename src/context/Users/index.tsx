import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../../interfaces";
import { useAuth } from "../auth";

//interfaces
interface FilmsProviderProps {
  children: ReactNode;
}

interface UsersProviderData {
  users: User[];
  handleGetUsers: () => void;
}

//context
const UsersContext = createContext<UsersProviderData>({} as UsersProviderData);

//provider

export const UsersProvider = ({ children }: FilmsProviderProps) => {
  const { logged } = useAuth();
  const [users, setUsers] = useState<User[]>([]);

  const handleGetUsers = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("https://nextfilms-api-production.up.railway.app/users", headers)
      .then((res) => {
        setUsers(res.data);
      });

    useEffect(() => {
      if (logged) handleGetUsers();
    }, [logged]);
  };

  return (
    <UsersContext.Provider value={{ users, handleGetUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
