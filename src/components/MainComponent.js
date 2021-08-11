import React, { Component } from 'react';
import Footer from './FooterComponent';
import { RECIPES } from '../shared/recipes';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecipeSection from './RecipeSectionComponent';
import RecipeInfoComponent from './RecipeInfoComponent';
import Header from './HeaderComponent';
import Body from './BodyComponent';

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
                <Body />
                <Switch>
                    <Route exact path='/recipes/beef' render={() => <RecipeSection recipes={this.state.recipes} category={"Beef"}/>} />
                    <Route exact path='/recipes/pork' render={() => <RecipeSection recipes={this.state.recipes} category={"Pork"}/>} />
                    <Route exact path='/recipes/seafood' render={() => <RecipeSection recipes={this.state.recipes} category={"Seafood"}/>} />
                    <Route exact path='/recipes/poultry' render={() => <RecipeSection recipes={this.state.recipes} category={"Poultry"}/>} />
                    <Route exact path='/recipes/snacks' render={() => <RecipeSection recipes={this.state.recipes} category={"Snacks"}/>} />
                    <Route exact path='/recipes/veggies' render={() => <RecipeSection recipes={this.state.recipes} category={"Veggies"}/>} />
                    <Route exact path='/recipes/:recipeId' component={RecipeWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default Main 