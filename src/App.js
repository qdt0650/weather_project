import Main from './pages/Main'
import { Route, Routes } from 'react-router-dom'
import './styles/reset.css'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Main />} />
      </Routes>
   )
}

export default App
