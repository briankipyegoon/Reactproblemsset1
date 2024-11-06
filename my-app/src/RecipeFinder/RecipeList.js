import React from "react"
import Recipe from "./Recipe"
import { recipes } from "./Data"

const RecipeList = ({recipes}) => {
    if (recipes.lenghth === 0){
        return<p>No recipes avaible.</p>
    }

    return (
        <div>
            {recipes.map((recipes, index)=> (
                <Recipe key={index} recipes= {recipes} />
            ))}
        </div>
    )
}

export default RecipeList;