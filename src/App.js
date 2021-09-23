
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/akashmaliye.github.io/ShoppingCart/" exact component={ProductListing} />
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
