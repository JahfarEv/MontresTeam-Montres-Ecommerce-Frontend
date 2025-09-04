import React, { useState } from "react";
import Sidebar from "./Sidebar";
import OrdersSection from "./OrdersSection";
import ProfileInformation from "./UserAccount/ProfileInformation";
import ProfileUpdate from "./UserAccount/ProfileUpdate";
import PasswordSection from "./PasswordSection";
import TrackingSection from "./OrderTracking/TrackingMap";

import watch from "../../assets/Watche/rendering-smart-home-device (1).jpg";
import bag from "../../assets/HandBags/close-up-kitted-bag-nature.jpg";
import jewlery from "../../assets/Clocks/8992.jpg";

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("orders");
  const [userData, setUserData] = useState({
    name: "Alex John",
    email: "alexjohn@gmail.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, New York, NY 10001",
    profilePicture: "",
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const orders = [
    {
      id: 1,
      name: "Hermès Kelly Red Watch 20mm",
      price: 4000,
      date: "13:45, Jun 10, 2025",
      image: watch,
      status: "Delivered",
      tracking: "TRK123456789",
    },
    {
      id: 2,
      name: "Hermès Handbag",
      price: 2500,
      date: "09:30, Jun 5, 2025",
      image: bag,
      status: "In Transit",
      tracking: "TRK987654321",
    },
    {
      id: 3,
      name: "Luxury Jewelry Set",
      price: 5800,
      date: "14:15, May 28, 2025",
      image: jewlery,
      status: "Processing",
      tracking: "TRK456789123",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "orders":
        return <OrdersSection orders={orders} setActiveSection={setActiveSection} />;
      case "profile":
        return isEditingProfile ? (
          <ProfileUpdate
            userData={userData}
            setUserData={setUserData}
            onCancel={() => setIsEditingProfile(false)}
          />
        ) : (
          <ProfileInformation
            userData={userData}
            onEdit={() => setIsEditingProfile(true)}
          />
        );
      case "password":
        return <PasswordSection />;
      case "tracking":
        return <TrackingSection/>;
      default:
        return <OrdersSection orders={orders} setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-white w-full max-w-7xl rounded-xl shadow p-6 mt-6">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Your Account</h1>
          <p className="text-gray-600">
            {userData.name}, Email: {userData.email}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

          {/* Main Content */}
          <div className="md:col-span-3">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
