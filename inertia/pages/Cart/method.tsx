import { useState } from "react";
import Qris from "@/assets/QRIS_Logo.svg";
import Kasir from "@/assets/kasir.png";
import { Button } from "@/components/ui/button";
import { router } from "@inertiajs/react";

function Method() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <section className="w-full flex flex-row px-5 gap-x-5">
        {/* QRIS */}
        <label
          className={`flex flex-row rounded-xl border w-full items-center p-3 gap-x-3 cursor-pointer
        ${selected === "qris" ? "border-[#0F3D2E] bg-[#0F3D2E]/5" : "border-gray-300"}
      `}
        >
          <input
            type="radio"
            name="payment"
            value="qris"
            checked={selected === "qris"}
            onChange={(e) => setSelected(e.target.value)}
            className="accent-[#0F3D2E]"
          />

          <img src={Qris} alt="QRIS" className="w-14 md:w-20" />
          <p>QRIS</p>
        </label>
        {/* Cashier */}
        <label
          className={`flex flex-row rounded-xl border w-full items-center p-3 gap-x-3 cursor-pointer
        ${selected === "cashier" ? "border-[#0F3D2E] bg-[#0F3D2E]/5" : "border-gray-300"}
      `}
        >
          <input
            type="radio"
            name="payment"
            value="cashier"
            checked={selected === "cashier"}
            onChange={(e) => setSelected(e.target.value)}
            className="accent-[#0F3D2E]"
          />

          <img src={Kasir} alt="Cashier" className="w-10 md:w-14" />
          <p>Cashier</p>
        </label>
        ``
      </section>
      {/* Button */}
      <section className="p-5 pb-20">
        <Button
          onClick={() => router.visit("/")}
          className="w-full bg-[#0F3D2E] hover:bg-[#0d2c22]"
        >
          Payment
        </Button>
      </section>
    </div>
  );
}

export default Method;
