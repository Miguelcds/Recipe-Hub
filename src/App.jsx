import './App.css'
import {Outlet} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <header>
      <h1>The Secret Recipe </h1>
      <h3>Discover, explore and save your favorite recipes</h3>
      <NavBar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>
    
    </>
  )
}

export default App
