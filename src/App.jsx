import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Usestatehook from './components/Hooks/Usestatehook'
import Useeffecthook from './components/Hooks/Useeffecthook'
import Usereducerhook from './components/Hooks/Usereducerhook'
import { UserProvider } from './components/context/context'
import Crud from './components/examples/Crud'
import Showmore from './components/examples/Showmore'
import Infinitescroll from './components/examples/Infinitescroll'
import Pagination from './components/examples/Pagination'
import Shopping from './components/examples/Shopping'
import { CartProvider } from './components/context/Product_context'
import Cart from './components/examples/Cart'
import Css from './components/css/Css'
import Loaderstemplate from './components/loaders/Loaderstemplate'
import Javascript from './components/javascript/Javascript'
import Form from './components/examples/Form'

function App() {

  return (
    <>
      <UserProvider>
        <CartProvider>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Usestatehook />} />
              <Route path='/useeffecthook' element={<Useeffecthook />} />
              <Route path='/usereducerhook' element={<Usereducerhook />} />
              <Route path='/crud' element={<Crud />} />
              <Route path='/showmore' element={<Showmore />} />
              <Route path='/infinitescroll' element={<Infinitescroll />} />
              <Route path='/pagination' element={<Pagination />} />
              <Route path='/shopping' element={<Shopping />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/loaderstemplate' element={<Loaderstemplate />} />
              <Route path='/css' element={<Css />} />
              <Route path='/javascript' element={<Javascript />} />
              <Route path='/form' element={<Form />} />
            </Routes>
          </div>
        </Router>
        </CartProvider>
      </UserProvider>
    </>
  )
}

export default App
