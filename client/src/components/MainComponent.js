import React, { Component } from 'react';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecipeSection from './RecipeSectionComponent';
import RecipeInfoComponent from './RecipeInfoComponent';
import Header from './HeaderComponent';
import Body from './BodyComponent';
import Store from './StoreComponent';
import ItemInfo from './ItemInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            storeItems: []
        }
    }

    componentDidMount() {
        this.getRecipes();
        this.getStoreItems();
    }

    getRecipes = () => {
        fetch('/api/recipes')
        .then(res => res.json())
        .then(recipes => this.setState({ recipes }))
    }

    getStoreItems = () => {
        fetch('/api/store')
        .then(res => res.json())
        .then(storeItems => this.setState({ storeItems }))
    }

    render() {
        const RecipeWithId = ({match}) => {
            return (
                <RecipeInfoComponent recipe={this.state.recipes.RECIPES.filter(recipe => recipe.id === +match.params.recipeId)[0]} 
                />
            )
        }

        const ItemWithId = ({match}) => {
            return(
                <ItemInfo
                    item={this.state.storeItems.STOREITEMS.filter(item => item.id === +match.params.itemId)[0]}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Body} />
                    <Route exact path='/recipes/recipe/:recipeId' component={RecipeWithId} />
                    <Route exact path='/recipes/:category' render={() => <RecipeSection recipes={this.state.recipes} />} />
                    <Route exact path='/store' render={() => 
                    <Store storeItems={this.state.storeItems}/>} />
                    <Route path='/store/:itemId' component={ItemWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}
export default Main 