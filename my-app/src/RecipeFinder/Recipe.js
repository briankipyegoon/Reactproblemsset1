import React from "react";
import { recipes } from "./Data";

const Recipe = ({recipes}) => {
    const {name, ingredients, difficulty} = recipes;

    return(
        <div>
            <h2>{name}</h2>
            <p>Ingredients: {ingredients.join(',')}</p>
            <p>Difficulty: {difficulty}</p>
        </div>
    
    )
}

export default Recipe;