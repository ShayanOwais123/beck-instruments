import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact";
import Categories from "./Pages/Categories";
import NotFound from "./Pages/NotFound";
import Surgical from "./Pages/Products/Surgical";
import Beauty from "./Pages/Products/Beauty";
import Veterinary from "./Pages/Products/Veterinary";
import Laboratory from "./Pages/Products/Laboratory";
import Dental from "./Pages/Products/Dental";
import ProductDetails from "./Pages/Products/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />

          <Route
            path="/products/:category/:slug"
            element={<ProductDetails />}
          />

          <Route path="/contact" element={<Contact />} />

          <Route path="/categories" element={<Categories />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/surgical" element={<Surgical />} />

          <Route path="/products/dental" element={<Dental />} />

          <Route path="/products/veterinary" element={<Veterinary />} />

          <Route path="/products/beauty" element={<Beauty />} />

          <Route path="/products/laboratory" element={<Laboratory />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
