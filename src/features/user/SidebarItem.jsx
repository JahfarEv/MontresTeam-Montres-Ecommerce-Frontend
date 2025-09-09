import React from "react";

const SidebarItem = ({ icon, text, extraText, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center px-4 py-3 rounded-xl cursor-pointer transition
      ${active ? "bg-blue-900 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
    >
      <div className="flex items-center space-x-3">
        <span className="text-lg">{icon}</span>
        <span className="text-sm font-medium">{text}</span>
      </div>
      {extraText && <span className="text-xs text-gray-500">{extraText}</span>}
    </div>
  );
};

export default SidebarItem;