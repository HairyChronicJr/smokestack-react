import React, { Component } from 'react';
import Footer from './FooterComponent';
import { RECIPES } from '../shared/recipes';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecipeSection from './RecipeSectionComponent';

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
                <Switch>
                    <Route exact path='/recipes' render={() => <RecipeSection recipes={this.state.recipes} />} />
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default Main 