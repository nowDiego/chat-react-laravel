import { StyleSheet} from 'react-native';

const css = StyleSheet.create({
   
  bg_primary:{
    backgroundColor:'#f841b5',
    color:'#fff',
   
  },

  bg_secundary:{
    backgroundColor:'#19a6e2',
    color:'#fff',
  },
  
  
  container: {     
      display:'flex',
      height:'100%',
      backgroundColor: '#fff',  
      justifyContent: 'center',
    },
   

    //Header    
   
    header:{
     
    flex:1,
    flexDirection:'row',
    alignItems: 'flex-end',  
    backgroundColor: '#f841b5',
    height:"30%",
    width:"100%",
    marginBottom:"5%"
    },


    headerBrand:{
      margin:10,
      fontWeight:'bold',
      fontSize:22,
      
    },

   
   //FIM_HEADER
   
   
   //CHAT 
    chat: {
      height:"85%",
      marginBottom:"5%",     
         },
       
         containerMessage:{
           flex:1,
           flexDirection:'column',
           margin:10
         }
         ,
  
         messageSent:{
      
          backgroundColor:'#f7ebdc',  
          alignSelf: 'flex-end',
          borderRadius:3,
          padding: 10,   
         
         },     

         messageSentTitle:{
          color:'#f841b5',
          fontSize:16,
          textTransform:'capitalize'
          

        },    

        messageContent:{
          fontSize:15
        }, 

        
        messageReceived:{
          backgroundColor: '#4caf5082',
          alignSelf: 'flex-start',
          borderRadius:3,
          padding: 10,
          

        },     

        messageReceivedTitle:{
          color:'#1882c9',
          fontSize:16,
          textTransform:'capitalize'
       },    

      send:{       
        height:"10%",
        display:'flex',
        flexDirection:'row',
        alignItems:'center'

      },

      card_view_chat:{
        width:'75%',       
        backgroundColor:'#d3d3d3',
        // backgroundColor:'#d9d9d9',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        },
        margin:'2%',
        borderRadius:20
        

      },

      txt_input_chat:{
        width:'100%',
        height:'90%',    
         padding:10
      },

      shadow_txt_input:{
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },

      container_bt_send:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'20%',
        height:'100%',   
        margin:3,
       
      },

      bt_chat:{
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'85%',
        height:'85%',      
        backgroundColor:'#19a6e2',
        borderRadius:50



      },
      bt_text_chat:{       
        color:'#fff',
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center'   
      },



//FIM_CHAT

//LOBBY   

      lobby_form:{
        display:'flex',       
        height:"80%",
        width:"100%",         
        justifyContent:'center',
        alignItems:'center'

      },
      lobby_brand:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:40,
        marginBottom:40
      
      }
      ,

      lobby_input:{
       
        width:'90%',     
        backgroundColor:"#fff",
        fontSize:19,
        padding:7,      
        marginBottom:5,
        },

      lobby_button:{
        width:'90%',
        padding:12,    
        borderRadius:5,       
      },

      wrapper:{
        width:"100%",
        height:"100%"
      },
      
      txt_erros:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:15,
        padding:5,
    
       
      }



//FIM_LOBBY




  //   button_home:{
  //    margin:20
  //   },

  //   imageButtonHome:{
  //      width:100,
  //      height:100
  //   },

  //   darkbg:{
  //     backgroundColor:'#333'
  //   },
  //  login_logomarca:{
  //   width:200,
  //   height:200,
  //   marginBottom:20
  
  //  },
  //   login_msg:(text='none')=>({
  //     fontWeight:'bold',
  //     fontSize:22,
  //     color:'red',
  //     marginTop:30,
  //     marginBottom:15,
  //     display:text
  //   }),
  //   login_form:{
  //     width:"80%"    
  //   },
  //   login_input:{
  //     backgroundColor:"#fff",
  //     fontSize:19,
  //     padding:7,
  //     marginBottom:15
  //   },
  //   login_button:{
  //     padding:12,
  //     backgroundColor:'#ED2939',
  //     alignSelf:'center',
  //     borderRadius:5      
  //   },
  //   login_buttonText:{
  //     color:'#fff',
  //     fontWeight:'bold',
  //     fontSize:22
  //   },
  //   login_cad_button:{
  //     marginTop:10,
  //     padding:12,      
  //     alignSelf:'center',
  //     borderRadius:5    
  //   },
  //   area_tab:{
  //     backgroundColor:'#333',
  //     fontSize:20,
  //     fontWeight:'bold',
  //     color:'#333'
  //   },
  //   area_menu:{
  //    flexDirection:'row',
  //    paddingTop:40,
  //    paddingBottom:10,
  //    width:'100%',
  //    backgroundColor:'#111',
  //    alignItems:'center',
  //    justifyContent:'center'
  //   },
  //   area_title:{
  //  width:'80%',
  //  fontWeight:'bold',
  //  fontSize:20,
  //  color:'#fff',
  //  textAlign:'center'
  //   },
  //   button_home2:{
  //    textAlign:'left'     
  //   },
  //   button_logout:{
  //     textAlign:'right'
  //   },
  //   shareQc_container:{
  //     flex: 1,     
  //     alignItems: 'center',
         
  //   },
  //   qrcodeShare:{
  //     width:200,
  //     height:200,
  //     marginTop:10,
  //     marginBottom:20
  //   },
   
  //   qr_code:(display='flex')=>({
  // width:'100%',
  // height:'100%',
  // backgroundColor:'#000',
  // justifyContent:'center',
  // display:display
  //   }),

  //   qr_form:(display='none')=>({
  //     width:'100%',
  //     display:display
  //   })

       


  });

  export {css} ;