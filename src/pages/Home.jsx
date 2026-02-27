import {useEffect, useState } from 'react'
import useRecipes from '../hooks/useRecipes';
import { SearchBar } from '../components/SearchBar';
import RecipeList from '../components/RecipeList';


const Home = () => {

  // Estados 

  const [search, setSearch] = useState("");
  const [error, setError] = useState("")
  const {recipes, loading, apiError, fetchRecipes, fetchRandomRecipes,setApiError } = useRecipes()

  // Lanza una Busqueda Random una unica vez al iniciar o volver a Home

  useEffect(()=>{
      fetchRandomRecipes()
  }, [])

  // Primera Comprobacion de si el input esta vacio, evita un fetch innecesario

  const handleClick = async () => {

    if(search.trim() === ""){
      
      setApiError("") // Limpio el ApiError por si antes hubo una busqueda no valida
      recipes.splice(0, recipes.length);
      return setError("Tienes que escribir algo si quieres hacer una busqueda");
    }
    setError("");

    return fetchRecipes(search)
  }


  return (
    <>
    <SearchBar search={search} setSearch={setSearch} error={error} onSearch={handleClick}/>
    {loading && <p style={{textAlign:"center", fontSize: "16px", color:"white"}}> Loading... </p>}
    {apiError && <p style={{textAlign:"center", fontSize: "16px", color:"red"}}>{apiError}</p>}
    <RecipeList recipes={recipes}/>
    
    
    </>
  )
}

export default Home




