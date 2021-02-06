import { Switch, Route } from "react-router-dom";
import Header from './common/header'
import Footer from './common/footer'
import Home from "./home";
import Cart from "./cart";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
