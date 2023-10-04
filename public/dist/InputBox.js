import "./styles.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './main';
import FaceTofaceboard from './ftfboard';


export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
          <Routes>
              <Route path={"/user/main"} element={<Home />}></Route>
              <Route path={"/user/ftfboard"} element={<FaceTofaceboard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}