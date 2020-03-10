import React from 'react';  
import { Route } from 'react-router-dom';  
  
const Page = ({children, ...rest}) => {  
  return (  
    <div className="page page-dashboard">  
      <div className="sidebar"></div>  
      <div className="main">{children}</div>  
    </div>  
  )  
}  
  
const DefaultLayout = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <Page>  
          <Component {...matchProps} />  
      </Page>  
    )} />  
  )  
};  
  
export default DefaultLayout;