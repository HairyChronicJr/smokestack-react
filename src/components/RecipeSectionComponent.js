import React from 'react';
import mainimage from "./images/recipes.jpg";

function RenderRecipeItem({recipe}) {
    return (
        <div className="col-6 col-sm-3 recipe">
            <img src={recipe.image} className="img-thumbnail" width="100%"/>
            <p class="font-weight-bold text-light">{recipe.name}<br /><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span><span className="fa fa-star text-warning"></span></p>
        </div>
    )
}

function RecipeSection(props) {
    const recipelist = props.recipes.map(recipe => {
        return (
            <div key={recipe.id} className='col m-1'>
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
                <div className="col">
                    <fieldset id="beef" className="p-0 my-3 bg-dark">
                        <legend className="text-center">Beef</legend>
                        {recipelist}
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default RecipeSection;