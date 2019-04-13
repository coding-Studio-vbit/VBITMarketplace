import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img1 from './img1.jpg';
import Img2 from './img2.jpg';
import Img3 from './img3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Landing1.css';
 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className="slider">
                    <img src={Img1} height="380px" width="70px" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Img2} height="380px" width="70px"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={Img3} height="380px" width="70px" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
 
export default DemoCarousel;