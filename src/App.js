import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header';
import {Home} from './../src/views/Home'
import { Skills } from './views/Skills';

function App() { 
  return (
    <BrowserRouter>
          <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/skills' element={<Skills />}/>
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
