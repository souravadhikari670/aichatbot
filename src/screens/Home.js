import React from 'react'

export default function Home(){

    return(
        <div className="container-fluid ">
            {/* <h3 className="display-3">Welcome to home</h3> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>

                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={require('../Pics/dental.jpg')}  className="d-block w-100" style={{height: 500}} alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={require('../Pics/Gastroenterology.jpg')}   className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={require('../Pics/neurology.jpg')}   className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={require('../Pics/ophthalmology.jpg')}   className="d-block w-100"style={{height: 520}} alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={require('../Pics/orthopaedics.jpg')}   className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={require('../Pics/psychiatry.png')}   className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={require('../Pics/radiotherapy.jpg')}   className="d-block w-100" style={{height: 520}} alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={require('../Pics/surgery.jpg')}   className="d-block w-100" style={{height: 520}} alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>

        </div>
    )
}