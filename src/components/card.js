const card = (props) => {
    return (
        <div className="col-md-4 g-4">
            <div className="card" style={{ border: "0", padding: "0", height: "100%" }}>
                <img src={props.product.image} className="card-img-top" alt={props.product.title} />
                <div className="card-body" style={{ padding: "0", paddingBottom: "2rem", position: "relative" }}>
                    <h5 className="card-title mt-3">{props.product.title}</h5>
                    <p className="card-text">{props.product.description}</p>
                    <div className="btn-group d-block" style={{ position: "absolute", bottom: "0", width: "100%" }}>
                        <a href="#" className="btn btn-outline-primary w-50 fw-bold rounded-0">PKR {props.product.price}</a>
                        <a href="#" className="btn btn-primary w-50 text-uppercase fw-bold rounded-0">add to bucket</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default card;