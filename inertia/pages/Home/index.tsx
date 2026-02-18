import Banner from "./banner";
import Header from "./header";
import Status from "./status";
import Menu from "./menu";

function Home() {
  return (
    <div className="w-full p-5">
      {/* Header */}
      <section className="pb-5">
        <Header />
      </section>
      {/* Banner */}
      <section className="pb-5">
        <Banner />
      </section>
      {/* Status Order */}
      <section className="pb-5">
        <Status />
      </section>
      {/* Menu */}
      <section>
        <Menu />
      </section>
    </div>
  );
}

export default Home;
