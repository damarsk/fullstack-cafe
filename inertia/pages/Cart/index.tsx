import Description from './description'
import HCart from './header'
import Items from './item'
import Method from './method'
import MainLayout from '@/layouts/mainLayout'
import { Head } from '@inertiajs/react'

function Cart() {
  return (
    <MainLayout>
      <Head title="Cart" />
      <div className="w-full">
        {/* Header */}
        <section className="pb-5 px-5">
          <HCart />
        </section>
        {/* Item */}
        <section>
          <Items />
        </section>
        {/* Description */}
        <section className="p-5">
          <Description />
        </section>
        {/* Method */}
        <section>
          <Method />
        </section>
      </div>
    </MainLayout>
  )
}

export default Cart
