import Card from "../common/card";
import { useEffect, useState } from 'react'
function CardList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(json => {
                setLoading(false)
                setProducts(json)
            })
    }, [])
    if (products.length === 0)
        <h1>{loading}</h1>

    return (
        <>
            <div className="page-wrapper" style={{ padding: "30px 0 60px 0" }}>
                <div className="container">
                    <div className="lead-text">
                        <h2>sharing meals</h2>
                    </div>
                    <div className="row">
                        {products.map(p => <Card product={p} key={p.id} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardList;