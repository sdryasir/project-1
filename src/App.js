import { Switch, Route } from "react-router-dom";
import Header from './common/header'
import Footer from './common/footer'
import Home from "./home";
import Cart from "./cart";
import Product from "./common/product";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/product/:id" component={Product} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
