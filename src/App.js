import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe(
  'pk_test_51MaNiLSERVek0tdZg0A7fe3SeCAnBy2fMa1hKx5q65SxewjC8BMWcmFYWKLEDdjKcyYFHVYFWy60Lnz5DoiCjQ5n006lsjwOM6'
  );



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads... 
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/payment" element={[
          <Header />,
          <Elements stripe={promise}>
            <Payment />
            </Elements>]} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

