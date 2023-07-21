import "./App.css";
import Header from "./Header";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
