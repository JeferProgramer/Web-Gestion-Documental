import './App.css';
import {Route, Routes} from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage.jsx"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
