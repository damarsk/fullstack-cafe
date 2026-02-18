import { Link, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";

function Header() {
  return (
    <section className="flex flex-row justify-between items-center">
      <div>
        <img src={logo} alt="" className="w-44" />
      </div>
      <Link href="/cart">
        <div className="relative">
          <ShoppingCart className="w-8 h-8 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            3
          </span>
        </div>
      </Link>
    </section>
  );
}

export default Header;
