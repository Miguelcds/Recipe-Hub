import ReactPlayer from "react-player";
import { useFavorites } from "../context/FavoritesContext";
import "./RecipeDetailCard.css";

const RecipeDetailCard = ({ recipe }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  return (
    <div className="recipe-detail">
      <img src={recipe.picture} alt="" />
      <h3>{recipe.name}</h3>
      <p>{recipe.category}</p>
      <h5>Ingredients:</h5>
      <ul style={{ listStyle: "none" }}>
        {recipe.ingredients?.map((ig, i) => (
          <li key={i}>
            {ig.name} - {ig.measure}
          </li>
        ))}
      </ul>
      <ReactPlayer src={recipe.video} controls width="100%" height="400px"  />
      <h4>{recipe.instructions}</h4>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {isFavorite(recipe.id) ? "💔 Remove from Favs" : "❤️ Add to Favs"}
      </button>
    </div>
  );
};

export default RecipeDetailCard;
