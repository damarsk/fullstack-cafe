import kopi from "@/assets/kopi.webp";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

function Items() {
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

  const [qty, setQty] = useState(2);

  const increment = () => setQty((prev) => prev + 1);
  const decrement = () => {
    if (qty > 1) setQty((prev) => prev - 1);
  };

  return (
    <div>
      {menus.map((item) => (
        <section className="px-5">
          <div className="flex flex-row py-5 items-center justify-between h-full border-b border-gray-400 ">
            {/* Bagian Kiri */}
            <div className="relative flex flex-row gap-x-5">
              <div className="">
                <p className="font-semibold text-lg md:text-xl">{item.name}</p>
                <p className="text-xs md:text-sm text-gray-500 pb-8">{item.description}</p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      Add Note
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-64">
                    <Textarea placeholder="Example: Less ice, no sugar..." />
                    <Button className="mt-2 w-full">Save</Button>
                  </PopoverContent>
                </Popover>

                <p className="text-lg text-gray-700 font-semibold">
                  <span className="text-lg text-gray-700">Rp.</span>
                  {item.price}
                </p>
              </div>
            </div>
            {/* Bagian Kanan */}

            <div className="flex flex-col items-center justify-between">
              <div className="w-[28vw] sm:w-[32vw] md:w-[14vw] h-[15vh] sm:h-[15vh] md:h-32 shrink-0 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-50">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className=" w-full aspect-square object-cover rounded-lg"
                />
              </div>
              {/* Button Jumlah */}
              <div className="flex items-center rounded-full bg-transparent border border-gray-300  gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={decrement}
                  className="rounded-full bg-transparent"
                >
                  <Minus className="w-4 h-4" />
                </Button>

                <span className="w-6 text-center">{qty}</span>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={increment}
                  className="rounded-full bg-transparent"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
export default Items;
