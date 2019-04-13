import React,{ Component } from 'react';
import './Landing.css';
import './Landing1.css';
import { Link } from 'react-router-dom';
import Cslogo from './cslogo.png';
class Product extends Component{
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
                <section className="single-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                            <img src={Cslogo} alt='cs logo' width="100%"></img>
                            </div>
                        
                         </div>

                    </div>
                
                
                </section>

            </body>
        );
    }
}
export default Product;