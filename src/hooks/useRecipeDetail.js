import { useEffect, useState } from "react";

import { getRecipeById } from "../services/api";

const useRecipeDetail = (id) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    if (!id) return
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        setRecipe(null);
        setApiError("");

        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (error) {
        return setApiError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  return { recipe, loading, apiError };
};

export default useRecipeDetail;
