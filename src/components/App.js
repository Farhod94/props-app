import React from "react";
import Card from "./Card";
import Movies from "./movies";
const App = () =>{
    return(
        <div>
            <h1 className="heading">My movies</h1>
        <Card
            name = {Movies[0].name}
            src = {Movies[0].imgUrl}
            price = {Movies[0].price}
            year = {Movies[0].year}
            title = "Titanic"
        />,
        <Card 
            name = {Movies[1].name}
            src = {Movies[1].imgUrl}
            price = {Movies[1].price}
            year = {Movies[1].year}
            title = "X-Man"
        />,
        <Card 
        name = {Movies[2].name}
        src = {Movies[2].imgUrl}
        price = {Movies[2].price}
        year = {Movies[2].year}
        title = "Avatar"
    />
    </div>
    );
};

export default App;