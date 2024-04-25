import React from 'react'
import { useSelector } from 'react-redux';

function RecipeList() {

    const data = useSelector((state) => state.recipes);
    const loading = useSelector((state) => state.loading);
    const recipe = useSelector((state) => state.recipe); //for Recipe text 

    return (
        <div className='outer-recipe'>
            <div>
                {loading && <p>Loading...</p>}
            </div>

            <div className='outer-recipes'>
                <div className='recipe-text-div'>
                    {recipe && data.length > 0 && <p className='recipes-text'>Recipes</p>}
                </div>

                <div className='recipes'>
                    {data && data.map((item, index) => (
                        <div key={index} >
                            <div className='list'>
                                <div className='labelDiv'>
                                    <p className='label'>{item.recipe.label}</p>
                                </div>
                                <div className='imageDiv'>
                                    <img alt={item.recipe.label} src={item.recipe.image} className='imageRecipe' />
                                </div>

                                <div className='ingredientsDiv'>
                                    <p className='ingredients'>{item.recipe.ingredientLines}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default RecipeList
