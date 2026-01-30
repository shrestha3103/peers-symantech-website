import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import ProductsPreview from "./sections/ProductsPreview";
import Services from "./sections/Services";
import Clientele from "./sections/Clientele";
import Contact from "./sections/Contact";

import Products from "./pages/Products";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <ProductsPreview />
              <Services />
              <Clientele />
              <Contact />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}
