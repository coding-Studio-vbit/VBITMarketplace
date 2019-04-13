import React from 'react';
import { item } from './item';


const Card = (props) =>{
    return(
        <div className="tc dib br3 pa2 ma2 grow bw2 shadow-5">
        <div class="flip-card " >
             <div class="flip-card-inner">
                <div class="flip-card-front">
                     <img alt="products" src={'https://robohash.org/ {props.name}?200*200 '} />
                     <h1>{props.name}</h1> 
                     <h2>₹{props.price}</h2> 
                 </div>
                    <div class="flip-card-back">
                    <a href="#" class="button">ADD TO CART</a>
                    <a href="#" class="button">MORE INFO</a>

                    </div>
                 </div>
            </div>
        </div>
    );
}

export default Card;