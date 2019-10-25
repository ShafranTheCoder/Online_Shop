import React from "react";
import { Route, Redirect } from "react-router-dom";

const layout = (Layout) => {
  return ({ component, middleware, ...rest }) => {
    return (
      <Route {...rest}
        render={props => {
          for (let key in rest) {
            key != "computedMatch"
              && key != "location"
              && (props[key] = rest[key])
          }

          const to = processMidlewares(middleware, props);

          if (to.pathname != props.location.pathname) {
            return <Redirect to={to} />
          }

          return <Layout {...props} component={component} />
        }} />
    )
  }
}

function processMidlewares(middlewares, props) {
  let location = { ...props.location };

  const replace = (data) => {
    location = { ...data };
  }

  if (middlewares) {
    if (typeof middlewares === "function") {
      middlewares(props, replace);

      return location;
    }

    if (Array.isArray(middlewares)) {
      for (const middleware of middlewares) {
        middleware(props, replace);
      }

      return location;
    }
  }

  return location;
}

export default layout;
