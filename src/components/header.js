import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CardList from "./cardlisting";
import Cart from "./cart";
const header = () => {
    return (
        <>
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">KFC</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">make it a deal</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">signature boxes</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">sharing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">promotions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">snacks</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">midnight deals</a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="bi bi-person-circle"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/cart"><i className="bi bi-cart-check-fill"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route path="/">
                            <Cart />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
};

export default header;