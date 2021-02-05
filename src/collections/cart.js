import { useState } from 'react'
import cartImg from '../empty-cart.png'

function Cart() {
    const [product, setProduct] = useState([
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
        let array = product.filter((p) => p.id != item.id)
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
                    product.length != 0 ? <>
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