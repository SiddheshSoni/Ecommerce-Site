import React,{useState} from 'react'
import Navigation from './components/UI/Navigation'
import "./App.css"
import Music from './components/Sections/Music'
import Footer from './components/UI/Footer'
import Cart from './components/Cart/Cart'

function App() {
  const [showCart, setShowCart] = useState(true);
  console.log(showCart);
  return (
    <>
    <header>
     <Navigation onShowCart={() => setShowCart(true)} />
      {showCart && <Cart onClose={() => setShowCart(false)} />}
     <h1>The Generics</h1>
    </header>
    <Music/>

    <Footer/>
    </>
  )
}

export default App
