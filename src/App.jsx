import { useState, useEffect } from 'react'
import './App.css'
import Banner from './components/banner.jsx'
import Products from './components/products.jsx'

function App() {

  const [category, setCategory] = useState("all");
  const [searchKey, setSearchKey] = useState("");

  const handleChangeCategory = (cat) => {
    setCategory(cat);
  }

  const handleChangeSearchKey = (curKey) => {
    setSearchKey(curKey);
  }

  return (
    <>
      <Banner handleChangeCategory={handleChangeCategory} handleChangeSearchKey={handleChangeSearchKey}/>
      <Products category={category} searchKey={searchKey}/>
    </>
  )
}

export default App
