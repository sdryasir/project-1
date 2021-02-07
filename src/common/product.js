import { useState } from 'react';
import { products } from "../data/products";
import { Link } from 'react-router-dom';

function Product(props) {
    const id = props.match.params.id
    let prod = products.filter(p => p.id == id)
    const [qty, setQty] = useState(1)
    const [drawer, setDrawer] = useState(false)

    const incHandler = () => {
        setQty(qty + 1)
    }
    const decHandler = () => {
        setQty(qty - 1)
    }


    return (
        <>
            <div className="container">
                <div className="inner-page-wrapper">
                    <div className="inner-head">
                        <div className="container">
                            <div className="inner-head-content">
                                <h3><small>{prod[0].title}</small></h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item" aria-current="page">{prod[0].title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-detail-wrapper pt-3 pb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="w-100" src={prod[0].image} alt={prod[0].title} />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bolder text-uppercase">{prod[0].title}</h3>
                            <p>{prod[0].description}</p>
                            <h3 className="fw-bolder text-uppercase">PKR {prod[0].price * qty}</h3>
                            <div className="btn-wrapper d-flex">
                                <div className="input-group w-25">
                                    <button className="btn btn-outline-secondary" onClick={() => decHandler(prod)} type="button">-</button>
                                    <input type="text" className="form-control" value={qty} />
                                    <button className="btn btn-outline-secondary" onClick={() => incHandler(prod)} type="button">+</button>
                                </div>
                                <button className="btn btn-danger text-uppercase ms-4" onClick={() => setDrawer(true)}>Add to bucket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                drawer ? <>
                    <div className="overlay-wrapper" onClick={() => setDrawer(false)}>

                    </div>
                    <div className="cart-drawer">
                        <div className="cart-drawer-head">
                            <div><h3><small>Your Cart</small></h3></div>
                            <div><h3><small>5</small></h3></div>
                            <div><h3><small>PKS 295</small></h3></div>
                        </div>
                    </div>
                </> : ''
            }
        </>
    )
}
export default Product;