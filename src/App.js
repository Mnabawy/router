import { Route } from "react-router-dom";

import Products from "./components/Products";
import NavBar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Posts from "./components/posts";
import Home from "./components/home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Route path="/products" component={Products} />
        <Route path="/posts" component={Posts} />
        <Route path="/admin" component={Dashboard} />
        <Route path="/" component={Home} exact />
      </div>
    </div>
  );
}

export default App;
