import { products } from "../data";
const cart = () => {
    return (
        <>
            <div className="inner-page-wrapper">
                <div className="inner-head">
                    <div className="container">
                        <div className="inner-head-content">
                            <h3><small>Cart Page</small></h3>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active" aria-current="page">Home</li>
                                    <li class="breadcrumb-item" aria-current="page">Cart</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className="cart-items-wrapper pt-5 pb-5">
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">price</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Action</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(p => <CartItems item={p} />)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

function CartItems(props) {
    return (
        <tr>
            <td><img src={props.item.image} alt="" /></td>
            <td>{props.item.title}</td>
            <td>{props.item.price}</td>
            <td>
                <div className="input-group">
                    <button className="btn btn-outline-secondary" type="button">-</button>
                    <input type="text" className="form-control" min="1" value="1" />
                    <button className="btn btn-outline-secondary" type="button">+</button>
                </div>
            </td>
            <td><i className="bi bi-x-square-fill"></i></td>
            <td><strong>PKR {props.item.price}</strong></td>
        </tr>
    )
}

export default cart;