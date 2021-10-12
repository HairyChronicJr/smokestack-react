import React, { useReducer } from 'react';

const initialState = {
    name: '',
    category: ''
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

function RecipeForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = (e) => {
        dispatch({field: e.target.name, value: e.target.value});
    }

    const {name, category} = state;

    return (
        <form>
            <label>
                Recipe Name:
                <input name="name" value={name} onChange={onChange} />
            </label>
            <select value={category} onChange={onChange}>
                Category:
                <option value='Beef'>Beef</option>
                <option value='Pork'>Pork</option>
                <option value='Poultry'>Poultry</option>
                <option value='Seafood'>Seafood</option>
                <option value='Veggies'>Veggies</option>
                <option value='Snacks'>Snacks</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    );
}