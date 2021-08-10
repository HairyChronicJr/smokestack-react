import React from 'react';
import { Link } from 'react-router-dom';
import mainimage from "./images/recipes.jpg";

function RenderStars(rating) {
    const fullStars = Math.trunc(rating);
    let halfStars = 0;
    if (rating - fullStars > 0) {
        halfStars = 1;
    }
    const emptyStars = 5 - halfStars - rating;
    const starArray = [];
    for (let i=0; i < fullStars; i++) {
        starArray.push(<span className="fa fa-star text-warning"></span>);
    }
    if (halfStars > 0) {
        starArray.push(<span className="fa fa-star-half-o text-warning"></span>)
    }
    for (let i=0; i < emptyStars; i++) {
        starArray.push(<span className="fa fa-star-o text-warning"></span>);
    }
    return (
        <>
            {starArray}
        </>
    )
}

function RenderRecipeItem({recipe}) {
    return (
        <div className="col recipe">
            <Link to={`/recipes/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.alt} className="img-thumbnail" width="300"/>
            </Link>
            <p class="font-weight-bold text-light">{recipe.name}<br />{RenderStars(recipe.rating)}</p>
        </div>
    )
}

function RecipeSection(props) {
    const categoryCheck = recipe => {
        if (recipe.category.includes(props.category)) {
            return recipe;
        }
    }
    const filteredList = props.recipes.filter(categoryCheck);
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
                    <legend className="text-center">{props.category}</legend>
                    <div className="row m-2">
                        {recipelist}
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default RecipeSection;