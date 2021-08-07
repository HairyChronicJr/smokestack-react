import React, { Component } from 'react';
import Footer from './FooterComponent';
import { RECIPES } from '../shared/recipes';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecipeSection from './RecipeSectionComponent';
import Header from './HeaderComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: RECIPES
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/recipes' render={() => <RecipeSection recipes={this.state.recipes} category={"Seafood"}/>} />
                    <Route exact path='/directory/:recipeId' /* component={RecipeWithID} */ /> 
                    
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default Main 