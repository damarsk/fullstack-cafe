import kopi from "@/assets/kopi.webp";
import { Plus } from "lucide-react";

function Menu() {
  const menus = [
    {
      id: 1,
      name: "Avocado Toast",
      description: "Perpaduan espresso dengan susu",
      image: kopi,
      price: 25000,
    },
    {
      id: 2,
      name: "Quinoa Salad",
      description: "Sayuran segar dan saus spesial",
      image: kopi,
      price: 25000,
    },
    {
      id: 3,
      name: "Hummus Plate",
      description: "Hummus creamy dengan roti pita",
      image: kopi,
      price: 25000,
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg">
      {/* Category */}
      <section className="p-5 w-full">
        <div className="w-full overflow-x-auto">
          <div className="flex gap-3">
            {/* Active */}
            <button className="px-5 py-2 rounded-full bg-[#0F3D2E] text-white text-sm font-medium whitespace-nowrap">
              All
            </button>

            {/* Inactive */}
            <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium whitespace-nowrap">
              Special
            </button>

            <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium whitespace-nowrap">
              Snacks
            </button>

            <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium whitespace-nowrap">
              Salad
            </button>
            <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium whitespace-nowrap">
              Coffee
            </button>
          </div>
        </div>
      </section>
      {/* Menu */}

      {menus.map((item) => (
        <section className="flex flex-col justify-center items-center w-full">
          <span className="border-b border-gray-400 w-80 md:w-full"></span>
          <div className="flex flex-row p-5 items-center justify-between gap-x-5 w-full">
            {/* Bagian Kiri */}
            <div className="">
              <p className="font-semibold text-xl">{item.name}</p>
              <p className="text-sm text-gray-500 pb-8">{item.description}</p>
              <p className="text-lg text-gray-700">
                <span className="text-lg text-gray-700">Rp.</span>
                {item.price}
              </p>
            </div>
            {/* Bagian Kanan */}
            <div className="relative ">
              <div className="w-[32vw] sm:w-[32vw] md:w-[14vw] h-[15vh] sm:h-[15vh] md:h-32 shrink-0 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-50">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className=" w-full aspect-square object-cover rounded-lg"
                />
              </div>
              {/* Add Menu */}
              <span className="absolute -top-2 -right-2 bg-[#2E7D5B] text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
                <Plus />
              </span>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Menu;
