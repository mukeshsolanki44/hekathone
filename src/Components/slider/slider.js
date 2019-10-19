import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";

const Slider = () => {
    return (
       
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
             
                        //    height='600px'
                                className="d-block w-100 "
                                src="https://getzpharma.com/wp-content/uploads/2016/06/Getz_Header_10-drugsafety.jpg"
                                alt="First slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                // height='600px'
                                className="d-block w-100 "
                                src="https://getzpharma.com/wp-content/uploads/2016/04/Getz_Header_1-about-us.jpg"
                                alt="Second slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                // height='600px'

                                className="d-block w-100 "
                                src="https://getzpharma.com/wp-content/uploads/2016/06/Getz_Header_7-professionals.jpg"
                                alt="Third slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
  
    );
}

export default Slider;