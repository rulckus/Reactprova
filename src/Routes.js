import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Menu from './App'
import Endpoint from './pages/endpoint/endpoint'

export default function Paths() {
    return (
      <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<Menu/>}></Route>
              <Route exact path="/endpoint" element={<Endpoint/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }