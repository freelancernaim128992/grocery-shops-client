import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import AdminContainer from './components/AdminContainer/AdminContainer';
import LogIn from './components/LogIn/LogIn';
import NoMatch from './components/NoMatch/NoMatch';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageProduct from './components/ManageProduct/ManageProduct';
import AddProduct from './components/AddProduct/AddProduct';
export const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <>
    <h1>email: {userInfo.email}</h1>
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <AdminContainer />
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct />
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct />
          </PrivateRoute>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
