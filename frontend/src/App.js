import './App.css';
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header"
import Main from "./components/Main"
import Food from "./pages/Food"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/food" element={<Food />} />
      </Routes>
    </div>
  );
}

export default App;
