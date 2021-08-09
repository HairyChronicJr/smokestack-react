import React, { Component } from 'react';
import Footer from './FooterComponent';
import { RECIPES } from '../shared/recipes';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecipeSection from './RecipeSectionComponent';
import RecipeInfoComponent from './RecipeInfoComponent';
import Header from './HeaderComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES
        }
    }

    render() {
        const RecipeWithId = ({match}) => {
            return (
                <RecipeInfoComponent recipe={this.state.recipes.filter(recipe => recipe.id === +match.params.recipeId)[0]} 
                />
            )
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/recipes' render={() => <RecipeSection recipes={this.state.recipes} category={"Seafood"}/>} />
                    <Route exact path='/recipes/:recipeId' component={RecipeWithId} />
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default Main 