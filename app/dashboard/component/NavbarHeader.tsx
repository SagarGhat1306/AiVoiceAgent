import React from "react";
import Image from "next/image";
import { User } from "lucide-react"; // user icon

const menuOptions = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "History", path: "/history" },
  { id: 3, name: "Pricing", path: "/pricing" },
  { id: 4, name: "Profile", path: "/profile" },
];

export default function NavbarHeader() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex items-center">
        <Image src="/file.svg" alt="logo" width={20} height={20} />
      </div>

      {/* Center - Menu Options */}
      <div className="hidden lg:flex space-x-8 text-gray-700 font-medium">
        {menuOptions.map((option) => (
          <a
            key={option.id}
            href={option.path}
            className="hover:text-blue-600 transition-colors"
          >
            {option.name}
          </a>
        ))}
      </div>

      {/* Right - User Icon */}
      <div className="flex items-center">
        <User className="w-6 h-6 text-gray-700 hover:text-blue-600 cursor-pointer" />
      </div>
    </nav>
  );
}
