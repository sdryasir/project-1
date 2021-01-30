//import { cartdata } from "../data/cartdata";
//import CartItem from "../components/cartItem";
import { useState } from 'react'
import cartImg from '../empty-cart.png'

function Cart() {
    const [qty, setQty] = useState([
        {
            id: 1,
            title: "Krunch Burger ",
            image: "/images/products/Bone-kfc.png",
            description: "Enjoy the crispy chicken fillet in a soft bun with spicy mayo and our signature sauce with fresh lettuce.",
            price: 195,
            stock: 10,
            qty: 1
        },
        {
            id: 2,
            title: "Krunch Burger with Drink ",
            image: "/images/products/Chicken-kfc.png",
            description: "Krunch burger with a regular drink.",
            price: 265,
            stock: 3,
            qty: 1
        },

    ])
    const [total, setTotal] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)



    const incHandler = (p) => {
        let arr = [...qty];
        p.qty = p.qty + 1
        //console.log(arr)
        setQty(arr)

    }

    const decHandler = (p) => {
        let arr = [...qty];
        p.qty = p.qty - 1
        if (p.qty < 1) {
            removeCartHandler(p)
        } else {
            setQty(arr)
        }

    }

    function changeHandler() {

    }

    const removeCartHandler = (item) => {
        let array = qty.filter((p) => p.id != item.id)
        setQty(array)
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
                {
                    qty.length != 0 ? <>
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
                                        qty.map((p) => <tr key={p.title}>
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
                            <span><strong>PKR {grandTotal}</strong></span>
                        </div>
                        <div className="cart-exit-btn d-flex justify-content-between">
                            <a href="#" className="btn btn-primary">continue shopping</a>
                            <input type="button" className="btn btn-primary" value="checkout" />
                        </div>
                    </> : <>
                            <img style={{ display: "block", margin: "0 auto" }} src={cartImg} alt="" />
                        </>
                }
            </section>
        </>
    );
};



export default Cart;