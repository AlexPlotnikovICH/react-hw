import { Banner } from '../../components/Banner'
import { Categories } from '../../components/Categories'
import { Discount } from '../../components/Discount' //
import { Sale } from '../../components/Sale'

export const Home = () => {
  return (
    <main>
      <Banner />
      <Categories />
      <Discount />
      <Sale />
    </main>
  )
}
