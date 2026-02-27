import { createContext, useState, useContext, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoriteProvider = ({ children }) => {
  // Este estado guardara los ID que se añadan a favoritos, usare localStorage para que hay persistencia en el tiempo 
  const [favorites, setFavorite] = useState(() => {
    const prev = localStorage.getItem("favorites");
    return prev ? JSON.parse(prev) : [];
  });

  // Vigila favoritos, en caso de que se borre o añade, modifica el localStorage

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Funcion que comprueba que: 1. verifica si el ID ya existe 2. Si existe lo borra 3. Si no existe lo añade --> // Vaya 2 horas de curro con la funcion de mierda

  const toggleFavorite = (id) => {
    setFavorite((prev) => {
      if (prev.includes(id)) {
        return prev.filter((f) => f !== id);
      }
      return [...prev, id];
    });
  };

  const isFavorite = (id) => favorites.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
// Esto lo mantengo aqui, pero eslint me pide cambiarlo de carpeta, me parece mas claro y visual mantenerlo aqui
export const useFavorites = () => useContext(FavoritesContext);
