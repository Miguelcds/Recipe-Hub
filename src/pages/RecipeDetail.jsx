import React from "react";
import { useParams } from "react-router-dom";
import useRecipeDetail from "../hooks/useRecipeDetail";
import RecipeDetailCard from "../components/RecipeDetailCard";


// Probando otras Formas de Retornar 

const RecipeDetail = () => {
  const { id } = useParams();

  const { recipe, loading, apiError } = useRecipeDetail(id);

  if (loading) return <p> Cargando... </p>;

  if (apiError) return <p style={{ color: "red" }}>{apiError}</p>;

  if (!recipe) return null;

  return (

    <RecipeDetailCard recipe={recipe}/>
    

  );
};

export default RecipeDetail;
