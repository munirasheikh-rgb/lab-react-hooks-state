import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { private_excludeVariablesFromRoot } from '@mui/material'
import { useEffect } from 'react'
const App = () => {
  // TODO: Implement state for dark mode toggle
    const [toggle , setToggle]=useState("")
  function handleToggle(){
    useEffect(()=>{
    setToggle("Toggle Light Mode")
    console.log("toggle")
  })
  }
  // TODO: Implement state for cart management
  const [cart , setcart]=useState([])
  function addToCart(products){
    setcart(prevCart=>[...prevCart,products])

    // console.log(cart)
  }
useEffect(()=>{
  console.log(cart)
},[cart])

  // TODO: Implement state for category filtering
const[category,setCategory]=useState("all")
const selectedCategory=(e)=>{
  setCategory(e.target.value)
}

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
     
     
      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
 <DarkModeToggle onToggle={handleToggle} />
      {/* TODO: Implement category filter dropdown */}

      <label>Filter by Category: </label>
      <select value={category} onChange={selectedCategory}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
      
      <ProductList addToCart={addToCart} category={category} />
     

      {/* TODO: Implement and render Cart component */}
       <Cart cart={cart}/>
    </div>
  )
}

export default App
