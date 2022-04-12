import React,{useState,useEffect,useContext} from 'react';
import { TouchableOpacity, View,TextInput ,ToastAndroid ,FlatList,Alert,BackHandler} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import axios from '../axios/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {css} from '../assets/css/style';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js/react-native'
import {AuthContext} from '../store/AuthContext'
import ItemMessage from '../assets/components/ItemMessage';

export default function Chat({navigation}){

  const {user} = useContext(AuthContext);

    const [sendMessage, setSendMessage] = useState({ 
        message:''
      });
    
      const [messages,setMessages]=useState([]); 
 
       
         
      useEffect(() => {
               
        message();
        channel();
        
      },[]);

      useEffect(() => {
        const backAction = () => {
          Alert.alert("Confirmação", "Deseja mesmo sair do Chat?", [
            {
              text: "Não",
              onPress: () => null,
              style: "cancel"
            },
            { text: "SIM", onPress: () => {
              AsyncStorage.removeItem('_token')
               navigation.navigate('Lobby')                    
            } }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

    
    
           
      function message() {
        axios
          .get("message")
          .then(async res => {
            if (res.data.status) {          
            await  setMessages(res.data.data);
             
            }
    
          });
    
      }
    
     
       
    
    function channel(){
      
    // Pusher.logToConsole = true;

    let PusherClient = new Pusher('mykey',{
        cluster: 'mt1',
        wsHost: '192.168.1.104',
        wsPort: '6001',
        enabledTransports: ['ws'],
        forceTLS: false
    });

    let echo = new Echo({
        broadcaster: 'pusher',
        client: PusherClient
    });
       
    
    echo.channel('channel-message').listen('MessageEvent',(e)=>{


        if(user.id != e.mensagem.user_id){    
      setMessages((t) => [...t, e.mensagem]);

      downButtonHandler();
    }
    
    })
    
    
    } 

    
    
      const onChangeTextSendMessage = text => setSendMessage({...sendMessage, message : text });
     
    
      const validate = (values) => {
        const errors = {};
      
        if (!values.message) {
          errors.message = "Escreva uma mensagem";
             } 
    
        return errors;
      };

      function showToast(value) {
        ToastAndroid.show(value.message, ToastAndroid.SHORT);
      }

    
        async function onSubmit() {       
       
        let validation = validate(sendMessage);   
               
    
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

            
        downButtonHandler();
           
          }    
        })
        .catch((exception) => {
          const errors = {};
          errors.message = 'Ocorreu um erro ao enviar a mensagem'
          showToast(errors);
             
        });
    
      }else{
        showToast(validation);
      }
       
      }

      const downButtonHandler = () => { 
        listMessages.scrollToEnd({animated: true}); 
      };

   

      


return (
  
<View style={css.wrapper}>
         
<View  style={css.chat} >
<FlatList 
 ref={(ref) => { 
  listMessages = ref; 
}} 
style={css.messages} 
data={messages}       
        renderItem={({ item, index, separators }) => ( 
          
         
          <ItemMessage item={item}  user={user}></ItemMessage>    

          )}
        
        keyExtractor={item => item.id.toString()} />

</View>


<View style={css.send} >
  

<View style={css.card_view_chat}  elevation={5} >
<TextInput    
      style={[css.txt_input_chat,css.shadow_txt_input]}  
      underlineColorAndroid="transparent"
      placeholder="Envie um mensagem"    
      multiline={true}
      onChangeText={text=>onChangeTextSendMessage(text)}
      value={sendMessage.message}
    />
    </View>

<View style={css.container_bt_send}>
<TouchableOpacity style={css.bt_chat} onPress={()=>onSubmit()}           
           >        
               <AntDesign name="right" size={27} color="white" />
           </TouchableOpacity>
           </View>
</View>

</View>

);

}