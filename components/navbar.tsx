"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, Home, Ticket, Users } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/tickets", label: "Tickets", icon: Ticket },
  { href: "/organizers", label: "Organizers", icon: Users },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 top-0 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0 text-white font-bold text-xl"
            whileHover={{ scale: 1.05 }}
          >
            Eventify
          </motion.div>
          <div className="flex space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "text-white bg-primary"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}