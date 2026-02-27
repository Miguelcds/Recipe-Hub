import { Link } from "react-router-dom";
import {useFavorites} from "../context/FavoritesContext";
import './RecipeCard.css'



const RecipeCard = ({ recipe }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <li className="recipe-card">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.picture} alt="" />
        <div className="recipe-card-content">
        <h3>{recipe.name}</h3>
        <p>{recipe.category}</p>
        </div>
      </Link>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite(recipe.id) ? '💔 Quitar de Favs': '❤️ Añadir a Favs'}
      </button>
    </li>
  );
};

export default RecipeCard;
