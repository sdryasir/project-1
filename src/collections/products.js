import { useParams } from 'react-router-dom';
import { products } from "../data/products";
import Card from '../common/card'
function Products() {
    let { slug } = useParams()
    let prod = products.filter((p) => p.category === slug)
    return (
        <div className="page-wrapper" style={{ padding: "30px 0 60px 0" }}>
            <div className="container">
                <div className="lead-text">
                    <h2>{slug}</h2>
                </div>
                <div className="row">
                    {prod.map(pp => <Card product={pp} key={pp.id} />)}
                </div>
            </div>
        </div>
    )
}
export default Products;