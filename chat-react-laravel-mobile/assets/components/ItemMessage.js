
import React,{useState,useEffect,useContext} from 'react';
import {  Text, View } from 'react-native';
import {css} from '../css/style';

export default function ItemMessage({item,user}){


return (
    <View style={css.containerMessage}>
           
    { item.users.id==user.id?    
   
    <View style={css.messageSent}>
    <Text style={css.messageSentTitle}>{item.users.name}</Text>     
    <Text style={css.messageContent}>{item.message}</Text>    
 </View>
 : 
  <View style={css.messageReceived}>
 <Text style={css.messageReceivedTitle}>{item.users.name}</Text>     
 <Text style={css.messageContent}>{item.message}</Text>    
</View>

    }

    </View>
);

}