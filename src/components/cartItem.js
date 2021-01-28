// import { useState } from 'react'
// function CartItem(props) {
//     const [qty, setQty] = useState(1)
//     const incHandler = () => {
//         setQty(qty + 1)
//     }
//     function decHandler() {
//         qty > 1 ? setQty(qty - 1) : setQty(1)
//         //setQty(qty - 1)
//     }
//     return (
//         <tr>
//             <td><img src={props.item.image} alt="" /></td>
//             <td>{props.item.title}</td>
//             <td>{props.item.price}</td>
//             <td>
//                 <div className="input-group">
//                     <button className="btn btn-outline-secondary" onClick={decHandler} type="button">-</button>
//                     <input type="text" className="form-control" value={qty} />
//                     <button className="btn btn-outline-secondary" onClick={incHandler} type="button">+</button>
//                 </div>
//             </td>
//             <td><i className="bi bi-x-square-fill"></i></td>
//             <td><strong>PKR {props.item.price * qty}</strong></td>
//         </tr>
//     )
// }
// export default CartItem;