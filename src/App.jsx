import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
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
import Cart from "./Pages/Cart";
import FAQ from "./Pages/FAQ";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/TermsConditions";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SearchResults from "./Pages/SearchResults";
import ScrollToTop from "./components/ScrollToTop";
 
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <ScrollToTop />
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
                <Route path="/products/surgical" element={<Surgical />} />
                <Route path="/products/dental" element={<Dental />} />
                <Route path="/products/veterinary" element={<Veterinary />} />
                <Route path="/products/beauty" element={<Beauty />} />
                <Route path="/products/laboratory" element={<Laboratory />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<SearchResults />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
 
export default App;
 