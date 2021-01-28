import { products } from '../data/products'
import Card from "../components/card";
function cardList() {
    return (
        <>
            <div className="page-wrapper" style={{ padding: "30px 0 60px 0" }}>
                <div className="container">
                    <div className="lead-text">
                        <h2>sharing meals</h2>
                    </div>
                    <div className="row">
                        {products.map(p => <Card product={p} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default cardList;