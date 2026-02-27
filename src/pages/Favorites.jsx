import React, { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";

import { getRecipeById } from "../services/api";
import RecipeList from "../components/RecipeList";

const Favorites = () => {
  const { favorites } = useFavorites();
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
     if (!favorites.length) return

    const fechtRecipe = async () => {

      try {
        const data = await Promise.all(
          favorites.map(id => getRecipeById(id))
        )
        setRecipes(data)

      } catch (error) {
        console.error(error);
      }
    };

    fechtRecipe()
  }, [favorites]);

   if (!favorites.length) return <p style={{textAlign:"center", fontSize: "20px"}}>No Has Añadido Nada a Favoritos</p>;

  return(
    <div>
      <RecipeList recipes={recipes} />
    </div>
    
  );
};

export default Favorites;
