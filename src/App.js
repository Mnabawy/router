import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import Products from "./components/Products";
import NavBar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Posts from "./components/Posts";
import Home from "./components/Home";

import "./App.css";
import ProductDetails from "./components/ProductsDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Switch>
          <Route
            path="/products/:id"
            render={props => <ProductDetails {...props} />}
          />
          <Route
            path="/products"
            render={props => <Products sortBy="newest" {...props} />}
          />
          <Route
            path="/posts/:year?/:month?"
            render={props => <Posts {...props} />}
          />
          <Route path="/admin" component={Dashboard} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/messages" to="/posts" />
          <Route path="/" exact component={Home} />
          {/* <Redirect to="/not-found" /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
