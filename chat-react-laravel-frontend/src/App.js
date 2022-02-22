import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import Chat from './pages/Chat';
import Lobby from './pages/Lobby';
import './assets/css/style.css';
import PrivateRoute from './components/routes/PrivateRoute';
import AuthProvider from './context/AuthContext';



function App() {

  return (

<AuthProvider>
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Lobby />}/>        
     
       <Route
        path="/chat"
        element={        
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        }
      /> 

    </Routes>
  </BrowserRouter>
  </AuthProvider>
 

  );
}

export default App;
