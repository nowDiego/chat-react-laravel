import React,{useState,useEffect,useContext} from 'react';
import { TouchableOpacity, Text, View,TextInput ,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import {AuthContext} from '../store/AuthContext'
import axios from '../axios/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {css} from '../assets/css/style'

export default function Lobby({navigation}){

    const {setUser} = useContext(AuthContext);
    const [name,setName]=useState(null);
    const [email,setEmail]=useState(null);

      
      const [formErrors, setFormErrors] = useState({});

      const validate = (name,email) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!email) {
          errors.email = "E-mail é obrigatório";         
         
        } else if (!regex.test(email)) {
          errors.email = "E-mail inválido";         
        }
        if (!name) {
          errors.apelido = "Apelido é obrigatório";          
                    } 
    
        return errors;
      };


      function showToast(value) {
        ToastAndroid.show(value.message, ToastAndroid.SHORT);
      }



      async function onSubmit() {
                          
        let validation = validate(name,email);    
       setFormErrors(validation);
         

          if(Object.keys(validation).length === 0) {
       
        await axios
          .post("chat/register", {
            apelido: name,
            email: email           
    
          })
          .then(async res => {
            if (res.data.status) {          
      
              setUser(res.data.data);         
            let userData =  await AsyncStorage.setItem(
                '_token',res.data.access_token                        
              );   
           navigation.navigate('Chat')

             
            }    
          })
          .catch((exception) => {

          const errors = {};
          errors.message = 'Ocorreu um erro ao enviar a mensagem'
          showToast(errors);
               
          });
       
        }

         }

         return(
            <KeyboardAvoidingView style={[css.container, css.bg_primary]}
            behavior={Platform.OS === "ios" ? "padding" : "height"}    
            >


    <View style={css.lobby_form}>
          <Text style={css.lobby_brand}>Chat Now</Text>
          <TextInput style={css.lobby_input} placeholder="Apelido:" onChangeText={text=>setName(text)}  />
          {formErrors.apelido !='' ? <Text style={css.txt_erros}>{formErrors.apelido}</Text>:null}

          <TextInput style={css.lobby_input}  placeholder="E-mail:"  onChangeText={text=>setEmail(text)} />
          {formErrors.email != ''? <Text style={css.txt_erros}>{formErrors.email}</Text>:null}
           <TouchableOpacity style={[css.lobby_button,css.bg_secundary]} onPress={()=>onSubmit()}           
           >
               <Text style={css.bt_text_chat}>Entrar</Text>
           </TouchableOpacity>
              </View>
   
                </KeyboardAvoidingView>
         );


}

