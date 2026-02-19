import Banner from "./banner";
import Header from "./header";
import Status from "./status";
import Menu from "./menu";
import MainLayout from "@/layouts/mainLayout";
import { Head } from "@inertiajs/react";

function Home() {
  return (
    <MainLayout>
      <Head title="Menu" />
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
    </MainLayout>
  );
}

export default Home;
