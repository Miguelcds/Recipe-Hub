import {useState} from 'react'

import { getRecipeByName, getRandomRecipes } from "../services/api";


const useRecipes = () => {

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("")


  const fetchRecipes = async (search) =>{

    setLoading(true)
    setRecipes([]);
    setApiError("");
    
    try {
      const data = await getRecipeByName(search)
  
      setRecipes(data)

    } catch (error) {
      return setApiError(error.message)  
    } finally{
      setLoading(false)
    }
  }

  const fetchRandomRecipes = async () => {
  setLoading(true);
  setApiError("");
  setRecipes([]);

  try {
    const data = await getRandomRecipes();
    setRecipes(data);
  } catch (error) {
    setApiError(error.message);
  } finally {
    setLoading(false);
  }
};


  return {recipes, loading, apiError, fetchRecipes, fetchRandomRecipes, setApiError}
}


export default useRecipes;

