import React from 'react';
import { Navigate } from 'react-router-dom';


function PrivateRoute({ children}) {
  const token =  localStorage.getItem('_token');
  return token ? children : <Navigate to="/" />;
}


export default PrivateRoute;
