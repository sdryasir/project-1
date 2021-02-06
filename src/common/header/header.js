import { Link } from "react-router-dom";

function header() {
    return (
        <>
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
                                    <Link className="nav-link active" to="/">make it a deal</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Signature box</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">sharing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">promotions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Snacks</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">midnight deals</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/"><i className="bi bi-person-circle"></i></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/cart"><i className="bi bi-cart-check-fill"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

        </>
    );
};

export default header;