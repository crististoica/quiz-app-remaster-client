import { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Loading from "./Loading";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const Dashboard = lazy(() => import("../components/Dashboard"));
const Community = lazy(() => import("../components/Community"));
const Posts = lazy(() => import("../components/Community/Posts"));
const Post = lazy(() => import("../components/Community/Posts/Post"));
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
    path: "/community/:topic",
    component: Posts,
    RouteComponent: PrivateRoute,
  },
  {
    path: "/community/:topic/:post",
    component: Post,
    RouteComponent: PrivateRoute,
  },
  {
    path: "/quiz/:quizType",
    component: Quiz,
    RouteComponent: PrivateRoute,
  },
  {
    path: "/quiz/:quizType/result",
    component: QuizResult,
    RouteComponent: PrivateRoute,
  },
  {
    path: "/admin",
    component: Admin,
    RouteComponent: AdminRoute,
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
