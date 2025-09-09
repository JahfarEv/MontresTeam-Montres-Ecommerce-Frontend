import React, { useState, useCallback, lazy, Suspense } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

// Lazy load form components for better performance
const LoginForm = lazy(() => import("./LoginForm"));
const RegisterForm = lazy(() => import("./Registerpage"));
const ForgotPasswordForm = lazy(() => import("./Forgotyourpassword"));

// Custom styles for the modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    borderRadius: "12px",
    overflow: "hidden",
    maxWidth: "900px",
    width: "90%",
    height: "auto",
    maxHeight: "calc(100vh - 40px)",
    "@media (max-width: 768px)": {
      width: "95%",
      maxHeight: "calc(100vh - 20px)",
      minHeight: "300px"
    }
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
    backdropFilter: "blur(3px)",
    transition: "opacity 200ms ease-in-out",
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
};

// Make sure to bind modal to your appElement
if (typeof window !== "undefined") {
  Modal.setAppElement("#root");
}

// Loading component for lazy loading
const FormLoading = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Image banner component
const ImageBanner = ({ onRequestClose }) => (
  <div className="hidden md:flex md:w-2/5 relative overflow-hidden">
    <button
      onClick={onRequestClose}
      className="absolute top-4 right-4 text-white hover:text-gray-200 z-10 transition-colors bg-black bg-opacity-30 rounded-full p-1"
      aria-label="Close modal"
    >
      <FaTimes size={20} />
    </button>
    
    <img 
      src="https://www.watchgecko.com/cdn/shop/articles/Banner-Longines-Spirit-Blue-on-Sailcloth-Padded-1_1100x.jpg?v=1706005457" 
      alt="Luxury Watch" 
      className="w-full h-full object-cover"
    />
  </div>
);

// Tab navigation component
const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "login", label: "LOGIN" },
    { id: "register", label: "REGISTER" }
  ];

  return (
    <div className="flex border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`py-2 px-4 font-medium transition-colors flex-1 ${
            activeTab === tab.id
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const AuthModal = ({ isOpen, onRequestClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  
  // Memoize tab change handler
  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  // Reset to login tab when modal closes
  const handleClose = useCallback(() => {
    setActiveTab("login");
    onRequestClose();
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={customStyles}
      contentLabel="Authentication Modal"
      closeTimeoutMS={200}
      ariaHideApp={false}
    >
      <div className="flex flex-col md:flex-row h-full">
        <ImageBanner onRequestClose={handleClose} />
        
        {/* Right side - Auth content */}
        <div className="w-full md:w-3/5 bg-white p-6 md:p-8 relative overflow-y-auto">
          {/* Close button for mobile */}
          <button
            onClick={handleClose}
            className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors bg-gray-100 rounded-full p-1"
            aria-label="Close modal"
          >
            <FaTimes size={20} />
          </button>

          <TabNavigation activeTab={activeTab} setActiveTab={handleTabChange} />

          <Suspense fallback={<FormLoading />}>
            {activeTab === "login" && (
              <LoginForm 
                setActiveTab={handleTabChange}
                onRequestClose={handleClose}
              />
            )}
            
            {activeTab === "register" && (
              <RegisterForm 
                setActiveTab={handleTabChange}
                onRequestClose={handleClose}
              />
            )}
            
            {activeTab === "forgot" && (
              <ForgotPasswordForm 
                setActiveTab={handleTabChange}
                onRequestClose={handleClose}
              />
            )}
          </Suspense>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;