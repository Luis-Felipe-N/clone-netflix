import { Home } from './pages/Home';
import { Perfil } from './pages/Perfil';

import { BrowserRouter, Route, Link } from "react-router-dom";

import './styles/global.scss'

function App() {
  
  return (
    // <Home />
    <BrowserRouter>
      <Route exact component={Home} path="/"/>
      <Route component={Perfil} path="/perfil"/>
    </BrowserRouter>
  );
}

export default App;
