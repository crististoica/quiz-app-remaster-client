import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const RedirectRoute = ({ component: Component, ...rest }) => {
  const userData = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!userData.isLoggedIn) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: props.location.pathname,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default RedirectRoute;
