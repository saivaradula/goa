import React from 'react';
import './login.css';

const Login = ({  classes }) => {  
    return (  
      <div className="container-fluid">
          <div className="row scroll-hidden">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 hidden-xs hidden-sm">
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <span>
                        <p className="tagline">Good Bye Pen &amp; Paper
                            <br /> Hello GoAudits
                        </p>
                        <img className="mobilelogo" src="https://portal.goaudits.com/GoAudits/assets/img/Preview_GoA.png" /> 
                    </span>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 leftside">
                <div className="activationLabel">
                    <a href="https://goaudits.com/">
                        <img className="main-logo" 
                            src="https://portal.goaudits.com/GoAudits/assets/img/App_LogoTitle.svg" />
                    </a>
                </div>
                {loginForm()}
            </div>            
        </div>
      </div>  
    );  
  };

const loginForm = () => {
    return (
        <div className="panel panel-login">
          <div className="panel-body">
            <div className="row">
                <div className="col-lg-12">
                    <form  id="login-form" noValidate="" style={{display:"block"}}>
                        <div className="form-group">
                            <input className="custom-input" name="username" placeholder="Email Address" type="email" />
                            </div>

                            <div className="form-group">
                                <div className="inner-addon right-addon">
                                    <md-icon className="eyeicon mat-icon material-icons" role="img" aria-hidden="true">visibility </md-icon>
                                    <input className="custom-input" autoComplete="new-password" name="password" placeholder="Password" type="password" />
                                </div>
                            </div>                        

                            <div className="col-xs-12 form-group text-center">
                                <input className="btn-login btn form-control" 
                                    name="login-submit" tabIndex="4" type="submit" value="Log In" />
                            </div>
                            <br />
                            <div className="row extraPadding">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-group pull-right alignRight">                    
                                <span>
                                <a className="signupLink" routerlink="/forgotpassword" href="#/forgotpassword">Forgot Password?</a>
                                </span>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 form-group pull-left alignLeft">
                                <span>
                                <a className="signupLink" routerlink="/registration" href="#/registration">New to GoAudits? Sign Up.</a>
                                </span>                    
                            </div>
                        </div>
                    </form>
                </div>
            </div>
          </div>
      </div>
    )
}
  
  export default Login