function Description() {
  return (
    <div>
      <section className="bg-[#0F3D2E] flex flex-col justify-between w-full rounded-xl p-5 text-white">
        <div className="bg-[#0F3D2E] flex justify-between w-full rounded-xl p-5 text-white">
          {/* Bagian Kiri */}
          <div>
            {" "}
            <p className="text-md md:text-lg font-semibold">Subtotal</p>
            <p className="text-md md:text-lg font-semibold">Tax</p>
          </div>
          {/* Bagian Kanan */}
          <div className="flex flex-col justify-center items-end">
            <p className="text-sm md:text-lg">ID85593</p>
            <p className="text-sm md:text-lg">Sedang Dimasak</p>
          </div>
        </div>
        <div className="border-t w-full flex flex-row justify-between items-center p-5">
          <p className="text-lg font-semibold ">Total</p>
          <p className="text-lg ">Rp.100.000</p>
        </div>
      </section>
    </div>
  );
}

export default Description;
