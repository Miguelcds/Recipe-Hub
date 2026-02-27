# 🍽️ The Secret Recipe

**The Secret Recipe** is a modern React application that allows users to discover, explore and save their favorite meals from around the world.

---

## 🚀 Features

- 🔍 Search recipes by name
- 🎲 Display random meals on initial load
- 📄 Dynamic recipe detail pages
- ❤️ Add / Remove favorites
- 💾 Persistent favorites using localStorage
- 🌑 Dark modern UI
- 📱 Fully responsive design
- ⚡ Optimized state management with custom hooks

-----

## 🧠 Technologies Used

### Frontend
- React
- React Router DOM
- Custom Hooks
- Context API
- React Player
- CSS (Dark theme custom design)

### API
- [TheMealDB API](https://www.themealdb.com/)

---

## 📂 Project Structure

```
src/
│
├── pages/
│      ├── Home.jsx
│      ├── RecipeDetail.jsx
│      └── Favorites.jsx
│
├── components/
│      ├── RecipeCard.jsx
│      ├── RecipeList.jsx
│      ├── RecipeDetailCard.jsx
│      ├── SearchBar.jsx
│      ├── Navbar.jsx
│      └── Footer.jsx
│
├── context/
│      └── FavoritesContext.jsx
│
├── hooks/
│      ├── useRecipes.js
│      └── useRecipeDetail.js
│
├── services/
│      └── api.js
│
└── App.jsx
```

---

## 🧩 Architecture Highlights

- Clean separation of concerns (API / Hooks / Components / Pages)
- Global state handled via Context API
- Data fetching abstracted into reusable custom hooks
- UI components kept presentational and reusable
- Persistent state management using localStorage

---

## 🎯 Learning Goals

This project was built to:

- Practice React architecture patterns
- Improve component structuring
- Work with dynamic routing
- Manage global state with Context
- Implement persistent UI state

---

## ⚙️ Installation

Clone the repository:

git clone https://github.com/your-username/the-secret-recipe.git

Install dependencies:

npm install

Run the project:

npm run dev


## 🔮 Future Improvements

- 📩 Implement a functional contact form
- 🔎 Add advanced search options (by category, ingredient, area, etc.)
- ➕ Allow users to submit and create new recipes
- 🗂️ Add filtering and sorting by categories
- ⭐ Improve favorites system with user accounts
- 🔐 Add authentication (login / register)
- 🌍 Multi-language support
- ⚡ Performance optimizations and caching
- 🎨 Enhanced animations and UI polish



## 👨‍💻 Author

Joao Costa
Full-Stack Developer in progress 🚀

## 📄 License

This project is developed for educational purposes.