const URL_BASE = "https://themealdb.com/api/json/v1/1/";

const apiOk = (res) => {
  if (!res.ok) {
    throw new Error(`The Meal Error: ${res.status}`);
  }
};

const apiMealOk = (data) => {
  if (!data.meals?.length) {
    throw new Error(
      "No se ha localizado ninguna receta con los datos introducidos",
    );
  }
};

// Consulta API para Busqueda por Nombre

export const getRecipeByName = async (search) => {
  const res = await fetch(`${URL_BASE}search.php?s=${search}`);

  apiOk(res);

  const data = await res.json();

  apiMealOk(data);

  return data.meals.map((e) => {
    return {
      id: e.idMeal,
      name: e.strMeal,
      picture: e.strMealThumb,
      category: e.strCategory,
    };
  });
};

// Consulta API para Busqueda por ID

export const getRecipeById = async (id) => {
  const res = await fetch(`${URL_BASE}lookup.php?i=${id}`);

  apiOk(res);

  const data = await res.json();

  apiMealOk(data);

  const meal = data.meals[0];

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        name: ingredient,
        measure: measure,
      });
    }
  }

  return {
    id: meal.idMeal,
    name: meal.strMeal,
    picture: meal.strMealThumb,
    category: meal.strCategory,
    instructions: meal.strInstructions,
    video: meal.strYoutube,
    ingredients,
  };
};



export const getRandomRecipes = async () => {
  const requests = Array.from({ length: 9 }, () =>
    fetch(`${URL_BASE}random.php`),
  );

  const responses = await Promise.all(requests);

  responses.forEach(apiOk);

  const data = await Promise.all(responses.map((res) => res.json()));

  data.forEach(apiMealOk);

  const meals = data.map((d) => d.meals[0]);

  return meals.map((e) => ({
    id: e.idMeal,
    name: e.strMeal,
    picture: e.strMealThumb,
    category: e.strCategory,
  }));
};
