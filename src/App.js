import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout';
import { Route, Switch } from 'react-router-dom'
import Home from './Containers/Home';
import Signin from './Containers/Signin';
import Signup from './Containers/Signup';
import PrivateRoute from './Components/HOC/PrivateRoute';
import { isUserLogin } from './actions';
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import Products from './Containers/Products';
import Orders from './Containers/Orders';
import Category from './Containers/Category';
function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLogin)
    }

  }, [])
  return (
    <div className="App">

      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />
        <PrivateRoute path="/category" component={Category} />

        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>

    </div>
  );
}

export default App;
