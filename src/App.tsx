import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import "./App.css";
import { PublicRoutes, Roles } from "./models";


import { PrivateRoutes } from "./models/routes";
import { AuthGuard, RoleGuard } from "./guards";

import { RoutesWithNotFound } from "./helpers";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Logout } from "./componets/Logout";
import { Dashboard } from "./pages/Private";

const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/Private/Private'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <Router>
          <Logout/>
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard  privateValidation={true}/>}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />               
              </Route>
              <Route element={<RoleGuard rol={Roles.ADMIN}/>}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard/>} />
              </Route>
            </RoutesWithNotFound>
          </Router>      
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
