import React from 'react'
import Header from './Components/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { routes } from './routes'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      {routes.map(({ path, screen }, index) => (
          <Route key={index} path={path} element={screen} />
        ))}
        <Route path='*' element={"Page Not Find"}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
