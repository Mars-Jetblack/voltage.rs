import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import './styles/shared.scss';
import NavBar from './components/containers/NavBar';
import NitroStream from "./pages/NitroStream";
import NitroStream2 from "./pages/NitroStream2";
import Sideattack from "./pages/Sideattack";
import NitroStream3 from "./pages/NitroStream3";
import BurninRubber3A from "./pages/3A";
import BurninRubber5A from "./pages/5A";
import Donations from "./pages/Donations";
import EOSL from "./pages/EOSL";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nitrostream" element={<NitroStream/>}/>
        <Route path="/sabotage" element={<NitroStream2/>}/>
        <Route path="/sideattack" element={<Sideattack/>}/>
        <Route path="/3a" element={<BurninRubber3A/>}/>
        <Route path="/5a" element={<BurninRubber5A/>}/>
        <Route path="/nitrostream3" element={<NitroStream3/>}/>
        <Route path="/donate" element={<Donations/>}/>
        <Route path="/endofsupport" element={<EOSL/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
