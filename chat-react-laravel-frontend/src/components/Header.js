import react,{useContext} from 'react'
import '../assets/css/header.css';
import {  useNavigate } from "react-router-dom";
import {AuthContext} from '../context/AuthContext'

 function Header(){

    const {setUser} = useContext(AuthContext); 
    const navigate = useNavigate();  

    async function logout(){
        setUser(null);     
        localStorage.removeItem('_token');
        navigate('/');
    }

return (
<>
<header>
    <nav>
        <div className='brand'>
        <a href='https://github.com/nowDiego'><h2>Chat Now</h2></a>   
        </div>
        <div className='menu'>
        <ul>
            <li>
               <button className='bt-primary bt-logout' onClick={()=>logout()}>Deslogar</button>
                </li>            
               
           
        </ul>
        </div>
    </nav>
</header>
</>

);
}

export default Header;