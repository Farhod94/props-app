import React from "react";
import Movies from "./movies";
import ReactDom from "react-dom";
const Card = (props) =>{
    return(
        <div>
            <h1 className="heading">My movies</h1>
            <div className="Card">
                <h1>{props.name}</h1>
                <img src={props.src} alt={props.title} />
                <p>{props.price}</p>
                <p>{props.year}</p>
            </div>
        </div>
    );
};

ReactDom.render(
    <div>
    <Card 
    name = {Movies[0].name}
    src = {Movies[0].imgUrl}
    price = {Movies[0].price}
    year = {Movies[0].year}
    title = "Titanic"
    />
    <Card 
    name = {Movies[1].name}
    src = {Movies[1].imgUrl}
    price = {Movies[1].price}
    year = {Movies[1].year}
    title = "X-Man"
    />
    <Card 
    name = {Movies[2].name}
    src = {Movies[2].imgUrl}
    price = {Movies[2].price}
    year = {Movies[2].year}
    title = "Avatar"
    />
    </div>,
    document.getElementById("root")
);

export default Card;