import React from 'react';  
import { Route } from 'react-router-dom';  
  
const Login = ({ children }) => (                         
    <div> 
        {children}
    </div>  
);  
  
const LoginLayout = ({component: Component, ...rest}) => {  
    return (  
        <Route {...rest} render={matchProps => (  
        <Login>  
            <Component {...matchProps} />  
        </Login>
        )} />  
    )  
};  
  
export default LoginLayout;