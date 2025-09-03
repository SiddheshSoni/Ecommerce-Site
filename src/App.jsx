import React,{useState} from 'react'
import Navigation from './components/UI/Navigation'
import "./App.css"
import Music from './components/Sections/Music'
import Footer from './components/UI/Footer'
import Cart from './components/Cart/Cart'
import ContextProvider from './components/store/ContextProvider'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './components/Pages/About'
import HomePage from './components/Pages/HomePage'


const router = createBrowserRouter([
  {path:"/", element:<Music/>},
  {path:"/about", element:<About/>},
  {path:"/home", element:<HomePage/>}
]);

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <ContextProvider>
    <header>
      <Navigation onShowCart={() => setShowCart(true)} />
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <h1>The Generics</h1>
    </header>
    <RouterProvider router={router}/>

    <Footer/>
    </ContextProvider>
  )
}

export default App
