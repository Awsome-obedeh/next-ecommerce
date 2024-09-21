import CategoriesList from "@/components/CategoriesList"

import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <>


      <Slider />
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h2 className="text-2xl">Product List</h2>
        <ProductList />
      </div>
      <div className='mt-24 '>
        <h2 className="text-2xl mb-12 md:px-8 lg:px-16 xl:px-32 2xl:px-64">Category LISt</h2>
        <CategoriesList />
      </div>
      <div className='mt-24 '>

 
      </div>

    </>
  )
}

export default HomePage