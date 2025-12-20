import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import EmployeeAbout from "./pages/EmployeeAbout";
import CompanyAbout from "./pages/CompanyAbout";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";

function App() {


  return (
    <>
   < Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} >
        <Route path="employee" element ={<EmployeeAbout/>}/>
        <Route path="company" element ={<CompanyAbout/>}/>
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetail/>} />
        <Route path="/contact" element={<Contact />} />
           <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
