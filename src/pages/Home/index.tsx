import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import * as S from './style' 
 
const Home = () => {
    const[users, setUsers] = useState([])

    const token = localStorage.getItem("token");
    const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    const getUsers = () => {
        axios.get('https://nextfilms-api-production.up.railway.app/users', headers).then((res) => {
            setUsers(res.data)
        })
    }

    useEffect(() => {
        getUsers()
     }, [users])

    const navigate = useNavigate()
    return(
        <S.Home>
            <S.Header>
                <button onClick={()=> navigate("/login")}>Sair</button>
            </S.Header>
            <div>
                {users.map((element, index) => {
                    return <Card user={element} key={index}/>
                })}
            </div>
        </S.Home>
    )
}

export default Home;