import './App.css'
import Home from './screens/Home'
import PaginaCep from './screens/PaginaCep'
import PaginaDog from './screens/PaginaDog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/busca-cep" element={<PaginaCep/>}/>
        <Route path="/foto-dog" element={<PaginaDog/>} />
      </Routes>
    </Router>
  )
}

export default App
