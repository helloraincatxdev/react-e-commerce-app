import './App.css';
import Navbar from './components/Navbar';
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Product from './components/Product';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
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
