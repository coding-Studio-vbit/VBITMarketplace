import React,{ Component } from 'react';
import './Landing.css';
import './Landing1.css';
import Cslogo from './cslogo.png';
import Img1 from './img1.jpg';
import Img2 from './img2.jpg';
import Img3 from './img3.jpg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { button } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class Landing extends Component{
    constructor(props){
        super(props)
            this.state={};
        this.openmenu = this.openmenu.bind(this);
        this.closemenu = this.closemenu.bind(this);
    }
    openmenu(){
        document.getElementById("side-menu").style.display="block";
        document.getElementById("menu-btn").style.display="none";
        document.getElementById("close-btn").style.display="block";
    }
    closemenu(){
        document.getElementById("side-menu").style.display="none";
        document.getElementById("menu-btn").style.display="block";
        document.getElementById("close-btn").style.display="none";
    }

    render(){
        return(
            <body>
                <div className="top-nav-bar">
                    <div className="search-box">
                    <i class="fa fa-bars" id="menu-btn" onClick={this.openmenu}></i>
                    <i class="fa fa-times" id="close-btn" onClick={this.closemenu}></i>

                        <img src={Cslogo} alt='cs logo' className="logo"></img>
                        <input type="text" className="form-control" placeholder="Search here"></input>
                        <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i>
</span>
                      </div>
                          <div className="menu-bar">
                            <ul>
                                <li><Link to="/Product" className="link">Cart</Link></li>
                                <li><Link to="/Fortesting" className="link">Signup</Link></li>
                                <li><Link to="/Fortesting" className="link">Login</Link></li>
                               
                            </ul>
                       </div>
                 </div>
                 <section className="header">
            <div className="side-menu" id="side-menu">
                <ul>
                    <li>Onsale<i class="fa fa-angle-right" aria-hidden="true"></i>
                        <ul>
                            <li>Sub Menu 1</li>
                            <li>Sub Menu 1</li>
                            <li>Sub Menu 1</li>
                            <li>Sub Menu 1</li>
                        </ul>
                    </li>
                    <li>Books<i class="fa fa-angle-right" aria-hidden="true"></i>
                    <ul>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                        </ul>
                    </li>
                    <li>Clothing<i class="fa fa-angle-right" aria-hidden="true"></i>
                    <ul>
                            <li>Sub Menu 3</li>
                            <li>Sub Menu 3</li>
                            <li>Sub Menu 3</li>
                            <li>Sub Menu 3</li>
                        </ul>
                    </li> 
                    <li>something1<i class="fa fa-angle-right" aria-hidden="true"></i>
                    <ul>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                        </ul>
                    </li> <li>something2<i class="fa fa-angle-right" aria-hidden="true"></i>
                    <ul>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                        </ul>
                    </li> <li>something3<i class="fa fa-angle-right" aria-hidden="true"></i>
                    <ul>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                        </ul>
                    </li> <li>something4<i class="fa fa-angle-right" aria-hidden="true"></i>
                    <ul>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                        </ul>
                    </li> <li>something5<i class="fa fa-angle-right" aria-hidden="true"></i>
                    <ul>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                            <li>Sub Menu 2</li>
                        </ul>
                    </li>
                </ul>

            </div>
           
            </section>

            </body>
        );
    }
}
export default Landing;