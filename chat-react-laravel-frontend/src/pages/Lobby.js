import React, { useEffect, useState,useContext } from 'react';
import axios from '../axios/index';
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../context/AuthContext'
import '../assets/css/lobby.css';



export default function Lobby(){

  const navigate = useNavigate();
  const {setUser} = useContext(AuthContext);

    const [values, setValues] = useState({
        apelido: '',
        email: '',      
      });

      const [response, setResponse] = useState({
        status: '',
        title: '',
        message: ''
      })

      const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "E-mail é obrigatório";
     
    } else if (!regex.test(values.email)) {
      errors.email = "E-mail inválido";
     
    }
    if (!values.apelido) {
      errors.apelido = "Apelido é obrigatório";
         } 

    return errors;
  };


      const onChange = e => setValues({ ...values, [e.target.name]: e.target.value });

    async function onSubmit(e) {
        e.preventDefault();    
                  
        let validation = validate(values);    
        setFormErrors(validation);
          

          if(Object.keys(validation).length === 0) {
       
        axios
          .post("chat/register", {
            apelido: values.apelido,
            email: values.email           
    
          })
          .then(res => {
            if (res.data.status) {           
              localStorage.setItem('_token', res.data.access_token);
              setUser(res.data.data); 
              navigate("/chat");                                       
       
             
            }    
          })
          .catch((error) => {
            console.log(error)
            setResponse(
              {
                status: false,
                title: 'Usuario!!!',
                message: 'Ocorreu ao Acessar o Chat'
              }
            )
               
          });
       
        }

         }


 
    return(

      <div className="Wrapper">
        <div className='lobby'>     
      
      
         <form onSubmit={onSubmit}>
         <h2 className='lobby-title'>Chat Now</h2>
  <label >Apelido</label>
  <input type="text" id="apelido" name="apelido" value={values.apelido} onChange={onChange}/>
  <p className="content-error">{formErrors.apelido}</p>
  <label >Email:</label>
  <input type="text" id="email" name="email" value={values.email} onChange={onChange} />
  <p className="content-error">{formErrors.email}</p>
  <button type="submit" className='bt-primary bt-lobby'>Entrar</button>
 {response?<p className="content-error">{response.message}</p>:null}
</form>

        </div>
        </div>
    );
}