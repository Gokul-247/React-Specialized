import axios from 'axios'
import React,{useEffect, useState} from 'react'

const RecipesPage = () => {
    const apiUrl = "https://dummyjson.com/recipes"
    const [recipes,setRecipes] = useState([])

    useEffect(() => {
        async function fetchRecipes(){
            try{
                const response = await axios.get(apiUrl)
                setRecipes(response.data.recipes)
            }
            catch(error){
                console.log(`Error inloading data ${error.essage}`);
            }
        }
        fetchRecipes();
    },[])
  return (
    <div>
        <h1>Hello World</h1>
        {recipes.map((recipes.name))}
        <div>
            <p>Item Name: {recipes.name}</p>
        </div>
    </div>
  )
}

export default RecipesPage