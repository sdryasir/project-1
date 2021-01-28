import { cartdata } from "../data/cartdata";
//import CartItem from "../components/cartItem";
import { useState } from 'react'

function Cart() {
    const [qty, setQty] = useState(cartdata)
    const [total, setTotal] = useState(0)
    const incHandler = (index) => {
        let arr = [...cartdata];
        arr[index].qty = arr[index].qty + 1
        //console.log(arr)
        setQty(arr)
        setTotal(total => total + arr[index].price)
    }


    function decHandler(index) {
        let arr = [...cartdata];
        arr[index].qty = arr[index].qty - 1
        //console.log(arr)
        setQty(arr)
        setTotal(total => total - arr[index].price)
    }

    function changeHandler() {

    }
    return (
        <>
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
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" class="">Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">price</th>
                                <th scope="col" style={{ width: "15%" }}>Qty</th>
                                <th scope="col">Action</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartdata.map((p, index) => <tr key={index}>
                                    <td><img src={p.image} alt="" /></td>
                                    <td>{p.title}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <div className="input-group">
                                            <button className="btn btn-outline-secondary" onClick={() => decHandler(index)} type="button">-</button>
                                            <input type="text" className="form-control" onChange={changeHandler} value={p.qty} />
                                            <button className="btn btn-outline-secondary" onClick={() => incHandler(index)} type="button">+</button>
                                        </div>
                                    </td>
                                    <td><i className="bi bi-x-square-fill"></i></td>
                                    <td><strong>PKR {p.price * p.qty}</strong></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                <div className="total-price text-end mb-5">
                    <span>Total Price: </span>
                    <span><strong>PKR {total}</strong></span>
                </div>
                <div className="cart-exit-btn d-flex justify-content-between">
                    <a href="#" className="btn btn-primary">continue shopping</a>
                    <input type="button" className="btn btn-primary" value="checkout" />
                </div>
            </section>
        </>
    );
};



export default Cart;