import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/shared/Navbar";
import Landing from "./components/shared/Landing";
import Listings from "./features/product/Listings";
import BrandNew from "./layouts/BrandNew";
import Form from "./components/ui/WatheForm";
import ChatRobot from "./components/ui/ChatRobot";
import WatchBrand from "./layouts/WatchBrand";
import AddSection from "./layouts/AddSection";
import PremiumBrands from "./layouts/PremiumBrands";
import Register from "./features/auth/Registerpage";
import CustomerReviews from "./components/ui/CustomerReviews";
import Footer from "./components/shared/Footer";
import JustforyouWatch from "./components/ui/JustforyouWatch";
import ItemCart from "./features/cart/ItemCart";
import ProductPage from "../src/features/product/WatchProductPage";
import Services from "./components/ui/Services";
import "../src/styles/responsive.css";
import Blog from "./layouts/Blog";
import Wishlist from "./components/ui/Wishlist";
import ProductDetailPage from "./components/ui/ProductDetailPage";
import Watches from "./features/products/Watches";
import ForgotPasswordModal from "./components/modals/ForgetPassword";
import ClocksPage from "./features/products/Clocks";
import LeathersPage from "./features/products/Lethers";
import AccessoriesPage from "./features/products/Accesories";
import JewelleryPage from "./features/products/Jwellery";
import BrandNewPage from "./features/products/BrandNew";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <div className="App">{/* <ForgotPasswordModal /> */}</div>
      <Navbar onSignUpClick={() => setModalIsOpen(true)} />
      <Register
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Services />
              <Listings />
              <PremiumBrands />
              <AddSection />
              <BrandNew />
              <Form />
              <ChatRobot />
              <WatchBrand />
              <JustforyouWatch />
              <Blog />
              <CustomerReviews />
            </>
          }
        />
        <Route path="/watches" element={<Watches />} />
        <Route path="/clocks" element={<ClocksPage />} />
        <Route path="/leathers" element={<LeathersPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/jewelry" element={<JewelleryPage />} />
        <Route path="/brand-new" element={<BrandNewPage />} />

        <Route path="/cart" element={<ItemCart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/DetailPage" element={<ProductDetailPage />} />
        <Route path="/watches/luxury" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
