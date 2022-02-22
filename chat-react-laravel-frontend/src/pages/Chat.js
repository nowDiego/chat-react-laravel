import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Echo from "laravel-echo"
import axios from '../axios/index';
import '../assets/css/chat.css';
import {AuthContext} from '../context/AuthContext'
import Header from '../components/Header'

window.Pusher = require('pusher-js');

function Chat() {

  
  const {user} = useContext(AuthContext);

  const [sendMessage, setSendMessage] = useState({ 
    message:''
  });

  const [messages,setMessages]=useState([]); 
 
  const [response, setResponse] = useState({
    status: '',
    title: '',
    message: ''
  })

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
           
    message();
    channel();


  },[]);





  function message() {
    axios
      .get("message")
      .then(res => {
        if (res.data.status) {  
        
          setMessages(res.data.data);
        }

      });

  }




function channel(){


  window.Echo = new Echo({    
    broadcaster: 'pusher',
    key: 'mykey',   
    wsHost: window.location.hostname,
    wsPort: 6001, 
    forceTLS: false,
    disableStats: true,  

});

   

window.Echo.channel('channel-message').listen('MessageEvent',(e)=>{

 
  if(user.id !== e.mensagem.user_id){
  setMessages((t) => [...t, e.mensagem]);
  var ScrMessages = document.getElementById("messages");
  ScrMessages.scrollTop = ScrMessages.scrollHeight;
 
}

})


} 

 
  const onChange = e => setSendMessage({...sendMessage, [e.target.name]: e.target.value });

  const validate = (values) => {
    const errors = {};
  
    if (!values.message) {
      errors.message = "Escreva uma mensagem";
         } 

    return errors;
  };

    async function onSubmit(e) {
    e.preventDefault();
   
    let validation = validate(sendMessage);    
    setFormErrors(validation);
      

      if(Object.keys(validation).length === 0) {

    axios
    .post("message", {
      message: sendMessage.message,         

    })
    .then( res =>{
      if (res.data.status) {          

    setMessages([...messages , res.data.data])
    setSendMessage({ 
      message:''
    })
    var ScrMessages = document.getElementById("messages");
    ScrMessages.scrollTop = ScrMessages.scrollHeight;
       
      }    
    })
    .catch((error) => {
      setResponse(
        {
          status: false,
          title: 'Usuario!!!',
          message: 'Ocorreu ao enviar Mensagem'
        }
      )
         
    });

  }
   
  }



  return (    
    <div className="wrapper">

    <Header/>

    <div className="chat"> 
 
    <div className="Messages" id="messages">

    {messages?
   messages.map((item)=>
      
       <div key={item.id} className="container-message">
       { item.users.id==user.id?      
        <div className="message-sent">
          <span className='message-sent-title'>{item.users.name}</span>
           <span className='message-content'>{item.message}</span>         
         </div>:
          <div  className="message-received">
           <span className='message-received-title'>{item.users.name}</span>   
          <span className='message-content'>{item.message}</span>
          
        </div>
}
        </div>
        

   ): null } 
    

    </div>

    <div className="send">

    <form onSubmit={onSubmit}>
    
        
    <textarea id="message" name="message" value={sendMessage.message} onChange={onChange}
          rows="5" cols="33">
Enviar sua mensagem...
</textarea>
<p className="content-error">{formErrors.message}</p>

<button type="submit" className='bt-primary bt-send'>Entrar</button>

{response?<p className="content-error">{response.message}</p>:null}

 </form>

    </div>


    </div>
    
    </div>
  );
}

export default Chat;
