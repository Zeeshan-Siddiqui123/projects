import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './Routes'
import Cart from './Screens/Cart'
import Shop from './Screens/Shop'
import ShopItems from './Screens/ShopItems'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, screen }, index) => (
            <Route key={index} path={path} element={screen} />
          ))}
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={"Page Not Found"} />
          <Route path='/' element={<Shop/>}>
            <Route path='shopitems' element={<ShopItems/>}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
