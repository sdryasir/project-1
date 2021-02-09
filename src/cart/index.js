import { useState } from 'react'
import cartImg from '../empty-cart.png'
import { cartData } from '../data/cartdata'
import { Link } from 'react-router-dom'

function Cart() {
    const [product, setProduct] = useState(cartData)

    const incHandler = (p) => {
        let arr = [...product];
        p.qty = p.qty + 1
        setProduct(arr)
    }
    const decHandler = (p) => {
        let arr = [...product];
        p.qty = p.qty - 1
        if (p.qty < 1) {
            removeCartHandler(p)
        } else {
            setProduct(arr)
        }
    }
    function changeHandler() {
    }
    const removeCartHandler = (item) => {
        let array = product.filter((p) => p.id !== item.id)
        setProduct(array)
    }
    function gradTotal(products) {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total = total + products[i].price * products[i].qty
        }
        return total;
    }

    return (
        <div className="container">
            <div className="inner-page-wrapper">
                <div className="inner-head">
                    <div className="container">
                        <div className="inner-head-content">
                            <h3><small>Cart Page</small></h3>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page">Home</li>
                                    <li className="breadcrumb-item" aria-current="page">Cart</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className="cart-items-wrapper pt-5 pb-5">
                {
                    product.length !== 0 ? <>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" class="">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">price</th>
                                        <th scope="col" style={{ width: "15%" }}>product</th>
                                        <th scope="col">Action</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((p) => <tr key={p.title}>
                                            <td><img src={p.image} alt="" /></td>
                                            <td>{p.title}</td>
                                            <td>{p.price}</td>
                                            <td>
                                                <div className="input-group">
                                                    <button className="btn btn-outline-secondary" onClick={() => decHandler(p)} type="button">-</button>
                                                    <input type="text" className="form-control" onChange={changeHandler} value={p.qty} />
                                                    <button className="btn btn-outline-secondary" onClick={() => incHandler(p)} type="button">+</button>
                                                </div>
                                            </td>
                                            <td><i className="bi bi-trash-fill" onClick={() => removeCartHandler(p)}></i></td>
                                            <td><strong>PKR {p.price * p.qty}</strong></td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="total-price text-end mb-5">
                            <span>Total Price: </span>
                            <span><strong>PKR {gradTotal(product)}</strong></span>
                        </div>
                        <div className="cart-exit-btn d-flex justify-content-between">
                            <Link to="/" className="btn btn-primary">continue shopping</Link>
                            <input type="button" className="btn btn-primary" value="checkout" />
                        </div>
                    </> : <>
                            <img style={{ display: "block", margin: "0 auto" }} src={cartImg} alt="" />
                        </>
                }
            </section>
        </div>
    );
};
export default Cart;