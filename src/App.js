import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  'pk_test_51IxuCoSEtN0tkRCm7nSEINKd8TorhKl9QvJOGhCLFq6urwI9ArFDFtj2UHYvFd6NKzkTYKGabmhIbMPDP8jPZaWo00qFuuTDqj'
);

function App() {
  const [{ basket }, dispatch] = useStateValue();
  
  useEffect(() => {
    //only run once when the app component loads up
    auth.onAuthStateChanged((authUser) => {
      console.log('user: ', authUser);
      if (authUser) {
        //user just logged in / user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
