import { Home, ShoppingCart, User } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[820px] bg-white border-t shadow-md z-50">
      <div className="flex justify-around items-center h-16">
        <NavItem to="/menu" icon={<Home size={22} />} label="Home" />
        <NavItem to="/cart" icon={<ShoppingCart size={22} />} label="Cart" />
        <NavItem to="/profile" icon={<User size={22} />} label="Profile" />
      </div>
    </nav>
  );
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

function NavItem({ to, icon, label }: NavItemProps) {
  return (
    <Link
      href={to}
      className={`flex flex-col items-center text-xs text-gray-500 hover:text-green-700`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
