import React from 'react';

function IngredientsList(props) {
    console.log("inside list: " + props.ingredients);
    return (
        <ul>
        {props.ingredients.map((ingredient, index) => {
            return (
                <li key={"ingredient"+{index}}>{ingredient}</li>
            )
        })}
        </ul>
    )
}

function InstructionsList(props) {
    return (
        <ol>
        {props.instructions.map((instruction, index) => {
            return (
                <li key={"step"+{index}}>{instruction}</li>
            )
        })}
        </ol>
    )
}

function RecipeInfo(props) {
    if (props.recipe) {
        console.log("Inside info component: " + props.recipe.steps);
        return (
            <div className="container">
                <div className="row">
                    <img src={props.recipe.image} width="50%"/>
                    <h5 className=" ml-2" id="recipe1Label">{props.recipe.name}</h5>
                </div>
                <div className="row">
                    <h3 className="text-warning">Ingredients</h3>
                    <IngredientsList ingredients={props.recipe.ingredients} />
                    <h3 className="text-warning">Instructions</h3>
                    <InstructionsList instructions={props.recipe.steps} />
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default RecipeInfo;