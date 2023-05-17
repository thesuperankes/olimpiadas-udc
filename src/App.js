import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login';
import { Waiting } from './Components/Waiting/Waiting';
import { InGame } from './Components/Game/InGame';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/esperando" element={<Waiting />} />
      <Route path="/partida" element={<InGame />} />
    </Routes>
  );
}

export default App;
