import { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Loading from "./Loading";

import PrivateRoute from "./PrivateRoute";

const Dashboard = lazy(() => import("../components/Dashboard"));
const Community = lazy(() => import("../components/Community"));
const Auth = lazy(() => import("../components/Auth"));
const Quiz = lazy(() => import("../components/Quiz"));
const QuizResult = lazy(() => import("../components/Quiz/QuizResult"));
const Admin = lazy(() => import("../components/Admin"));

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    RouteComponent: PrivateRoute,
  },
  {
    path: "/community",
    component: Community,
    RouteComponent: PrivateRoute,
  },
  {
    path: "/quiz/:course",
    component: Quiz,
    RouteComponent: PrivateRoute,
  },
  {
    path: "/quiz/:course/result",
    component: QuizResult,
    RouteComponent: PrivateRoute,
  },
  {
    path: "/admin",
    component: Admin,
    RouteComponent: PrivateRoute,
  },
];

const Routes = () => {
  const userData = useSelector((state) => state.auth);

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map((route) => (
          <route.RouteComponent
            key={route.path}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
        {!userData.isLoggedIn && <Route exact path="/auth" component={Auth} />}
        <Route exact path="*">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
