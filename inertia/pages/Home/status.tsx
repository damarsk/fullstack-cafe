function Status() {
  return (
    <section
      className="bg-[#0F3D2E] flex justify-between w-full rounded-xl p-5 text-white"
    >
      {/* Bagian Kiri */}
      <div>
        {" "}
        <p className="text-lg font-semibold">Your Order</p>
        <p className="text-lg font-semibold">Status</p>
      </div>
      {/* Bagian Kanan */}
      <div>
        <p className="text-lg">ID85593</p>
        <p className="text-lg">Sedang Dimasak</p>
      </div>
    </section>
  );
}

export default Status;
