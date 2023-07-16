import React from "react";

const Card = (props) =>{
    return(
        <div>
            
            <div className="Card">
                <h1>{props.name}</h1>
                <img src={props.src} alt={props.title} />
                <p>{props.price}</p>
                <p>{props.year}</p>
            </div>
        </div>
    );
};

export default Card;