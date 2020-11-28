import './App.css';
import Navbar from './components/Navbar';
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Cart from './views/Cart'
import Product from './views/Product';
import Home from './views/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route exact path="/product/:slug">
          <Product/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
