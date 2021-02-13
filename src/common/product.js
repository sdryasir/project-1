import { useState } from 'react';
import { findProductById } from "../data/products";
import PageTitleBar from "./page-title-bar";
import Counter from './counter'
function Product(props) {
    const id = props.match.params.id
    const [product] = useState(() => findProductById(id))
    const [drawer, setDrawer] = useState(false)

    if (!product)
        return <h1>No product found for id {id}</h1>

    return (
        <>
            <div className="container">
                <PageTitleBar title={product.title} />
                <div className="product-detail-wrapper pt-3 pb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="w-100" src={product.image} alt={product.title} />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bolder text-uppercase">{product.title}</h3>
                            <p>{product.description}</p>
                            <h3 className="fw-bolder text-uppercase">PKR {product.price * 1}</h3>
                            <div className="btn-wrapper d-flex">
                                <Counter />
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