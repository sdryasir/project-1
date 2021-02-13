import { Link } from 'react-router-dom'

function PageTitleBar(props) {
    return (
        <div className="inner-page-wrapper">
            <div className="inner-head">
                <div className="container">
                    <div className="inner-head-content">
                        <h3><small>{props.title}</small></h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item" aria-current="page">{props.title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitleBar;