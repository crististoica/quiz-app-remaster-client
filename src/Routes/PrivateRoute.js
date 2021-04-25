import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userData = useSelector((state) => state.auth);

  if (userData.isLoading) {
    return <Loading />;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if (userData.isLoggedIn) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/auth",
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

export default PrivateRoute;
