import React, { useState } from 'react';
import Rating from './RatingComponent';

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
    const [favorite, setFavorite] = useState(false);
    const handleFave = () => {
        setFavorite(!favorite);
    };

    if (props.recipe) {
        return (
            <div className="container">
                <div className="row">
                    <div className='col'>
                        <img src={props.recipe.image} alt={props.recipe.alt} width="100%" className="pt-3"/>
                        <div className="text-center">
                            <Rating rating={props.recipe.rating} /><p>({props.recipe.numRatings} ratings)</p>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <h2 className="ml-2 pt-3 text-center" id="recipe1Label">{props.recipe.name}{'   '}
                                {!favorite && <i class="fa fa-heart-o favorite" aria-hidden="true" onClick={handleFave}></i>}
                                {favorite && <i class="fa fa-heart favorite" aria-hidden="true" onClick={handleFave}></i>}</h2>
                                <h4 className="text-center">by {props.recipe.author}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h3 className="text-warning pl-2">Ingredients</h3>
                                <IngredientsList ingredients={props.recipe.ingredients} />
                            </div>
                            <div className="col">
                                <div className="time-stats">
                                    <i className="fa fa-clock-o fa-2x" style={{color: "#FFA500", float: "right", paddingRight: 5}}/>
                                    <p style={{paddingTop: 20}}>Prep: {props.recipe.prepTime} minutes</p>
                                    <p>Cook: {props.recipe.cookTime} minutes</p>
                                    <p>Total: {props.recipe.prepTime + props.recipe.cookTime} minutes</p>
                                </div>
                            </div>
                        </div>
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