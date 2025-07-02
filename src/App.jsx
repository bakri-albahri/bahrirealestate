import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/website/Header/Header'
import Hero from './Pages/Hero/Hero'
import Residencies from './Pages/Residencies/Residencies'
import Value from './Pages/Value/Value'
import ContactUs from './Pages/ContactUs/ContactUs'
import Footer from './components/website/Footer/Footer'
import GitHUb from './GitHUb'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="app">
      <Header />
      <Routes>
        <Route path='/bahrirealestate' element={<GitHUb />}>
          <Route path='/' element={<Hero />} />
          <Route path='/residencies' element={<Residencies />} />
          <Route path='/our-value' element={<Value />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Route>
      </Routes>
      <Footer />
    </div>
    
  )
}

export default App
