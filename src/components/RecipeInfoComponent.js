import React from 'react';

function IngredientsList(props) {
    return (
        <ul className="ingredientsList">
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
        <ol className="instructionsList">
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
        return (
            <div className="container">
                <div className="row">
                    <img src={props.recipe.image} alt={props.recipe.alt} width="300" className="pt-3"/>
                    <div className="col">
                        <h2 className=" ml-2 pt-3 text-center" id="recipe1Label">{props.recipe.name}</h2>
                        <h3 className="text-warning pl-2">Ingredients</h3>
                        <IngredientsList ingredients={props.recipe.ingredients} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="text-warning pl-3">Instructions</h3>
                        <InstructionsList instructions={props.recipe.steps} />
                    </div>
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