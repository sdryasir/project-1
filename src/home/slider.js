import { sliderdata } from '../data/sliderdata';
function slider() {
    return (
        <div className="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-interval="2000" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        sliderdata.map(s => <SliderItem sImage={s} />)
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    );
};


function SliderItem(props) {
    return (
        <div className={`carousel-item ${props.sImage.id == 1 ? 'active' : ''}`} >
            <img src={props.sImage.image} className="d-block w-100" alt="..." />
        </div>
    )
}

export default slider;