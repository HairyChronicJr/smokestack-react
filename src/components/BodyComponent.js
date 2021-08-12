import React from "react";
import susie from './images/susie.png';
import grill from './images/grill.jpeg';
import apron from './images/apron.jpeg';
import gloves from './images/gloves.jpeg';
import pellets from './images/pellets.jpeg';
import rub from './images/rub.jpeg';
import techniques from './images/techniques.jpeg';

function Body(){
    return(
        <>
            <main className="container my-5">

                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-3 border border-dark newsletter">
                        <h3 className="text-center mb-3 newsletter-title">Featured Griller</h3>
                            <img className="border border-dark img-fluid rounded-circle mt-1" src={susie} alt="Susie" width="100%" />
                        <h5 className="text-center mt-3 newsletter-title"><u>Susie Bulloch</u></h5>
                            <p className="text-center d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Urna neque viverra justo nec ultrices dui sapien. Eget sit amet tellus cras. Semper viverra nam libero justo laoreet sit amet. Sed odio morbi quis commodo odio aenean. Mattis ullamcorper velit sed ullamcorper. Faucibus nisl tincidunt eget nullam. Quam quisque id diam vel quam. Praesent elementum facilisis leo vel fringilla. Sodales neque sodales ut etiam sit amet.</p>
                    </div>

                    <div className="col-md-7 col-lg-9 bg-dark">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <h3 className="text-center text-nowrap mb-3 carousel-title">Featured Store Items</h3>
                                <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#homeCarousel" data-slide-to="1"></li>
                                        <li data-target="#homeCarousel" data-slide-to="2"></li>
                                        <li data-target="#homeCarousel" data-slide-to="3"></li>
                                        <li data-target="#homeCarousel" data-slide-to="4"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100 img-responive" src={grill} alt="grill" />
                                            <div className="carousel-caption">
                                                <h3 className="carousel-caption-title">Woodwind Wifi 24 w/Sear Box</h3>
                                                <p className="d-none d-sm-block">nunc consequat interdum varius sit amet mattis vulputate enim nulla</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 img-responive" src={apron} alt="apron" />
                                            <div className="carousel-caption">
                                                <h3 className="carousel-caption-title">Chef's Apron</h3>
                                                <p className="d-none d-sm-block">nunc consequat interdum varius sit amet mattis vulputate enim nulla</p>
                                            </div>                           
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 img-responive" src={gloves}alt="gloves" />
                                            <div className="carousel-caption">
                                                <h3 className="carousel-caption-title">Heat Guard Gloves</h3>
                                                <p className="d-none d-sm-block">nunc consequat interdum varius sit amet mattis vulputate enim nulla</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 img-responive" src={pellets} alt="pellets" />
                                            <div className="carousel-caption">
                                                <h3 className="carousel-caption-title">Premium Hardwood Pellets</h3>
                                                <p className="d-none d-sm-block">nunc consequat interdum varius sit amet mattis vulputate enim nulla</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100 img-responive" src={rub} alt="rub" />
                                            <div className="carousel-caption">
                                                <h3 className="carousel-caption-title">BBQ Rubs</h3>
                                                <p className="d-none d-sm-block">nunc consequat interdum varius sit amet mattis vulputate enim nulla</p>
                                            </div> 
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    <button className="btn btn-dark btn-sm" id="carouselButton">
                                        <i className="fa fa-pause"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 justify-content-center">
                            <div className="col-lg-5">
                                <h2 className="text-center text-nowrap tips">Tips From Our Pros</h2>
                                <p className="tip-content text-center d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor.</p>
                            </div>
                            <div className="col-lg-7">             
                                <img className="img-fluid w-100" id="techniques" src={techniques} alt="techniques" />
                            </div>
                        </div>     
                    </div>
                </div>

                <div className="row mt-5" id="aboutUs">
                    <div className="col">
                        <h3>About us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Libero enim sed faucibus turpis. A erat nam at lectus urna duis convallis convallis.</p>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Body;