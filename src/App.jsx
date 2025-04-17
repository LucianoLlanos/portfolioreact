import { Route, Routes } from 'react-router-dom';
import PaginaP from './componentes/PaginaP';
import Home from './componentes/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PaginaP />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
