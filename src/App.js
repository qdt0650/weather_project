import Main from './pages/Main'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import './styles/reset.css'
import Sun from './pages/Sun'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
         <Route path="/sun" element={<Sun />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
