import React from 'react';
import { Link, useParams } from 'react-router-dom';
import mainimage from "./images/recipes.jpg";
import Rating from './RatingComponent';

function RenderRecipeItem({recipe}) {
    return (
        <div className="col recipe">
            <Link to={`/recipes/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.alt} className="img-thumbnail recipeImage" />
            </Link>
            <p className="font-weight-bold text-light">{recipe.name}<br /><Rating rating={recipe.rating}/></p>
        </div>
    )
}

function RecipeSection(props) {
    const { category } = useParams();
    const categoryCheck = recipe => {
        if (recipe.category.includes(category)) {
            return recipe;
        }
    }
    const filteredList = props.recipes.RECIPES.filter(categoryCheck);
    const recipelist = filteredList.map(recipe => {
        return (
            <div className="col" key={recipe.id}>
                <RenderRecipeItem recipe={recipe}/>
            </div>
        );
    })

    return (
        <div className="container">
            <div className="row my-3">
                <div className="col d-flex align-items-center justify-content-center">
                    <img src={mainimage} className="d-block image-responsive" width="400" alt="Man in apron holding ribeye" />
                </div>
            </div>
            <div className="row">
                <fieldset className="p-0 my-3 mx-auto bg-dark">
                    <legend className="text-center">{category}</legend>
                    <div className="row m-2">
                        {recipelist}
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default RecipeSection;