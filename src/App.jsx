import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./components/shared/Navbar";
import Landing from "./components/shared/Landing";
import Listings from "./features/product/Home";
import BrandNew from "./layouts/Watch";
import Form from "./components/ui/WatheForm";
import ChatRobot from "./components/ui/ChatRobot";
import WatchBrand from "./layouts/WatchBrand";
import AddSection from "./layouts/AddSection";
import PremiumBrands from "./layouts/PremiumBrands";
import CustomerReviews from "./components/ui/CustomerReviews";
import Footer from "./components/shared/Footer";
import JustforyouWatch from "./components/ui/JustforyouWatch";
import ItemCart from "./features/cart/ItemCart";
import ProductPage from "../src/features/product/WatchProductPage";
import Services from "./components/ui/Services";
import "../src/styles/responsive.css";
import Wishlist from "./components/ui/Wishlist";
import ProductDetailPage from "./components/ui/ProductDetailPage";
import AuthModal from "./features/auth/AuthModal";
import UserProfile from "./features/user/UserProfile";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [authAction, setAuthAction] = useState("login"); // 'login' or 'register'

  const handleAuthAction = (action) => {
    setAuthAction(action);
    setModalIsOpen(true);
  };

  return (
    <div>
      <Navbar 
        onSignUpClick={() => handleAuthAction("register")}
        onLoginClick={() => handleAuthAction("login")} 
      />
      <AuthModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        defaultAction={authAction}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Listings />
              <AddSection />
              <WatchBrand />
              <Form />
              {/* <ChatRobot /> */}
              <JustforyouWatch />
              <PremiumBrands />
              <BrandNew />
              <Services />
              {/* <CustomerReviews /> */}
            </>
          }
        />
        <Route path="/cart" element={<ItemCart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/DetailPage" element={<ProductDetailPage />} />
        <Route path="/watches/luxury" element={<ProductPage />} />
        <Route path="/userAccount" element={<UserProfile/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;