import { ArrowLeft } from "lucide-react";

function HCart() {
  return (
    <div>
      <div className="justify-center items-center relative flex flex-row ">
        <button
          onClick={() => window.history.back()}
          className="absolute bg-transparent left-0 md:left-2 p-2 rounded-full cursor-pointer border border-gray-400"
        >
          <ArrowLeft />
        </button>

        <h1 className="text-4xl md:text-4xl">Your Cart</h1>
      </div>
    </div>
  );
}

export default HCart;
