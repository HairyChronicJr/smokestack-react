import React, {useState} from "react";
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators,CarouselCaption} from 'reactstrap';
import susie from './images/susie.png';
import grill from './images/grill.jpg';
import apron from './images/apron.jpg';
import gloves from './images/gloves.jpg';
import pellets from './images/pellets.jpg';
import rub from './images/rub.jpg';
import techniques from './images/techniques.jpg';


const items = [
    {
        src: grill,
        altText: "grill",
        captionHeader: "Woodwind Wifi 24 w/Sear Box",
        captionText: "nunc consequat interdum varius sit amet mattis vulputate enim nulla"
    },
    {
        src: apron,
        altText: "apron",
        captionHeader: "Chef's Apron",
        captionText: "nunc consequat interdum varius sit amet mattis vulputate enim nulla"
    },
    {
        src: gloves,
        altText: "gloves",
        captionHeader: "Heat Guard Gloves",
        captionText: "nunc consequat interdum varius sit amet mattis vulputate enim nulla"
    },
    {
        src: pellets,
        altText: "pellets",
        captionHeader: "Premium Hardwood Pellets",
        captionText: "nunc consequat interdum varius sit amet mattis vulputate enim nulla"
    },
    {
        src: rub,
        altText: "rub",
        captionHeader: "BBQ Rubs",
        captionText: "nunc consequat interdum varius sit amet mattis vulputate enim nulla"
    }
];

const Body = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
            >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.captionText} captionHeader={item.captionHeader} />
            </CarouselItem>
        );
    });

    return(
        
            <div className="container my-5">

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

                                <Carousel
                                    activeIndex={activeIndex}
                                    next={next}
                                    previous={previous}
                                >
                                    <CarouselIndicators 
                                        items={items} 
                                        activeIndex={activeIndex} onClickHandler={goToIndex}
                                    />
                                    {slides}
                                    <CarouselControl 
                                        direction="prev" directionText="Previous" 
                                        onClickHandler={previous} 
                                    />
                                    <CarouselControl 
                                    direction="next" 
                                    directionText="Next" 
                                    onClickHandler={next} 
                                    />
                                </Carousel>
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

            </div>
        
    );
}

export default Body;