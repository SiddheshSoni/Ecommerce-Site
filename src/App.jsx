import React,{ useState} from 'react'
import Navigation from './components/UI/Navigation'
import "./App.css"
import Music from './components/Sections/Music'
import Footer from './components/UI/Footer'
import Cart from './components/Cart/Cart'
import ContextProvider from './components/store/ContextProvider'
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import About from './components/Pages/About'
import HomePage from './components/Pages/HomePage'
import { Button } from 'react-bootstrap'
import ContactUs from './components/Pages/ContactUs'


const router = createBrowserRouter([
  {path:"/", element:<Music/>},
  {path:"/about", element:<About/>},
  {path:"/home", element:<HomePage/>},
  {path:"/contact", element:<ContactUs/>}
]);

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <ContextProvider>
      <div className="d-flex flex-column min-vh-100">

    <header>
      <Navigation onShowCart={() => setShowCart(true)} />
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      <h1>The Generics
        {window.location.pathname === "/home" && <div style={{"text-align":"center", "justifyContent":"center"}}>
          <Button variant='outline-info'>Get our Latest Album</Button>
          <Button variant="outline-info" className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: "80px", height: "80px", fontSize: "2rem" }}
      >
        ▶
      </Button>
          </div>}
      </h1>
       
    </header>
    <RouterProvider router={router}/>

    <Footer/>
        </div>
    </ContextProvider>
  )
}

export default App;
