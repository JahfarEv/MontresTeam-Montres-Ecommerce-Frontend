import React from "react";
import { FaBox, FaHeart, FaBell, FaLanguage, FaSignOutAlt, FaUser, FaTruck, FaKey } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="md:col-span-1">
      <div className="space-y-3">
        <SidebarItem 
          active={activeSection === "orders"} 
          icon={<FaBox />} 
          text="My Orders" 
          onClick={() => setActiveSection("orders")}
        />
        <SidebarItem 
          active={activeSection === "profile"} 
          icon={<FaUser />} 
          text="Profile" 
          onClick={() => setActiveSection("profile")}
        />
        <SidebarItem 
          active={activeSection === "password"} 
          icon={<FaKey />} 
          text="Change Password" 
          onClick={() => setActiveSection("password")}
        />
        <SidebarItem 
          active={activeSection === "tracking"} 
          icon={<FaTruck />} 
          text="Live Tracking Order" 
          onClick={() => setActiveSection("tracking")}
        />
        <SidebarItem icon={<FaHeart />} text="Wishlist" />
        <SidebarItem icon={<FaBell />} text="Notification" />
        <SidebarItem
          icon={<FaLanguage />}
          text="Language"
          extraText="English (US)"
        />
        <SidebarItem icon={<FaSignOutAlt />} text="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;