import React from "react";
import { recipes } from "./Data";
import RecipeList from "./RecipeList";

const RecipeFinder = () => {
    return (
        <div>
            <h1>Recipe Finder</h1>
            <RecipeList recipes={recipes}/>
        </div>
    );
};

export default RecipeFinder;