import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import DefaultLayout from "../layouts/default";
import LoginLayout from "../layouts/login";

export default function RouteWrapper({
  component: Component,
  ...rest
}) {
  const signed = true;  // We have to validate it with token. 

  if ( !signed ) {
    return <Redirect to="/login" />;
  }

  const Layout = signed ? LoginLayout : DefaultLayout; 
 
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};