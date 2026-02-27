import "./SearchBar.css";

// Recibe las variables y funciones del padre
export const SearchBar = ({ search, setSearch, onSearch, error }) => {
  // Devuelve un componente input con el que:
  // 1. Realizamos las busquedas
  // 2. Arrojamos el error
  return (
    
    <div className="search-superior">
      <div className="search-container">
        <input
          id="search-input"
          type="text"
          placeholder="Search Recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={onSearch}>Buscar</button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};
