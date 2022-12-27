import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Header from "./Header";
import Checkout from './Checkout';
import Login from './Login';
import Orders from './Orders';
import Footer from './Footer';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51MIqGcSCEbemH5XhprZwWtuVwibkvU8yK8eREnXb8TrUDFy9v1HLjmExr8hWKUwYi5tld66JRcAPEyxL7p1xqcsX00fWaYKDIY"
);

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
  
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
  
      if (authUser) {
        // the user just logged in / the user was logged in
  
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
      <Router>
        <div className="app">
        
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route 
          path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />  
            <Home />
          </Route>
        </Switch>
    </div>
      </Router>
  );
}
export default App;
