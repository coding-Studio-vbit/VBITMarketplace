import React,{ Component } from 'react';
import Cslogo from './cslogo.png';
import './Landing1.css';
import Img1 from './img1.jpg';
class Landing1 extends Component{
    render(){
        return(
            <body>
            <section className="featured-categories">
                <div className = "container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Cslogo}></img>
                         </div>
                        <div className="col-md-4">
                            <img src={Cslogo}></img>
                         </div>
                        <div className="col-md-4">
                            <img src={Cslogo}></img>
                         </div>
                    </div>
                </div>
            </section>
            <section className="on-sale">
                <div className="container">
                    <div className="title-box">
                        <h2>On Sale</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        <div className="product-top">
                        <img src={Cslogo} width="100%"></img>
                        <div className="overlay-right">
                        <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="fa fa-eye"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to wishlist"><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        </div>
                        <div className="product-bottom text-center">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                                <h3>cslogo</h3>
                                <h5>$40.00</h5>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="product-top">
                        <img src={Cslogo} width="100%"></img>
                        <div className="overlay-right">
                        <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="fa fa-eye"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to wishlist"><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        </div>
                        <div className="product-bottom text-center">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                                <h3>cslogo</h3>
                                <h5>$80.00</h5>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="product-top">
                        <img src={Img1} width="80%" height="262px"></img>
                        <div className="overlay-right">
                        <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="fa fa-eye"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to wishlist"><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        </div>
                        <div className="product-bottom text-center">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                                <h3>Spectrum All in One</h3>
                                <h5>Rs.500</h5>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="product-top">
                        <img src={Cslogo} width="100%"></img>
                        <div className="overlay-right">
                        <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="fa fa-eye"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to wishlist"><i className="fa fa-heart-o"></i></button>
                        <button type="button" className="btn btn-secondary" title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
                        </div>
                        </div>
                        <div className="product-bottom text-center">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                                <h3>cslogo</h3>
                                <h5>$100.00</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            </body>
        );
    }
}
export default Landing1;