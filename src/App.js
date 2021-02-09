import { Switch, Route } from "react-router-dom";
import Header from './common/header'
import Footer from './common/footer'
import Home from "./home";
import Cart from "./cart";
import Product from "./common/product";
import "./App.css";
import Products from './collections/products';
import Login from './login';
import Register from './register';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/collection/:slug">
          <Products />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/account/login">
          <Login />
        </Route>
        <Route exact path="/account/register">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
