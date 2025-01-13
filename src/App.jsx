import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Sponsor Dios Shop" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría seleccionada" />} />
      </Routes>
    </Router>
  );
}

export default App;
