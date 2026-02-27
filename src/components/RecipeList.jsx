import RecipeCard from "./RecipeCard";
import './RecipeList.css'

const RecipeList = ({ recipes }) => {
  if (!recipes.length) return null;

  return (
    <ul className="recipe-list">
      {recipes.map((r) => <RecipeCard key={r.id} recipe={r}/>)}
    </ul>
  );
};

export default RecipeList;
