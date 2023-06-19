import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import Home from './pages/Home'
import Layout from './pages/Layout'
import Header from './components/Header'
import Juice from './components/Juice'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/juice' element={<Juice/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
