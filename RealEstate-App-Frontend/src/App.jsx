import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header"
import Home from "./Components/Home"
import SearchedResults from './Components/SearchedResults';
import CreateProperty from './Components/CreateProperty';
import EditProperty from './Components/EditProperty';

function App() {

  return (
    <>
      <Header />
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/results" element={<SearchedResults />} />
                <Route path='/create' element={<CreateProperty />} />
                <Route path='/edit/:id' element={<EditProperty />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
