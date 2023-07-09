import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import CarouselComponent from 'src/components/Carousel/Carousel'
import Navbar from 'src/components/Navbar/Navbar'
import ProductGrid from 'src/components/Productgrid/Productgrid'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  const featuredSlides = [
    'images/carousel_1.png',
    'images/carousel_2.png',
    'images/carousel_1.png',
    'images/carousel_2.png',
    'images/carousel_1.png',
    'images/carousel_2.png',
  ]

  const categoriesSlides = [
    'images/category_1.png',
    'images/category_2.png',
    'images/category_3.png',
    'images/category_4.png',
    'images/category_5.png',
    'images/category_1.png',
    'images/category_2.png',
    'images/category_3.png',
    'images/category_4.png',
    'images/category_5.png',
  ]

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Navbar />
      <div className="mx-auto mt-5 max-w-7xl">
        {/* FEATURED CAROUSEL */}
        <CarouselComponent
          slides={featuredSlides}
          maw={400}
          slideSize="30%"
          slideToScroll={1}
        />
        {/* CATEGORY CAROUSEL */}
        <div className="mt-10 flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">Category</h1>
          <h2 className="text-xs">What are you currently looking for</h2>
          <CarouselComponent
            slides={categoriesSlides}
            maw={300}
            slideSize="20%"
            slideToScroll={1}
          />
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <h1 className="text-4xl font-semibold">New</h1>
          <h2 className="text-xs text-secondary">
            You've never seen it before!
          </h2>
        </div>
        {isAuthenticated && <ProductGrid />}
      </div>
    </>
  )
}

export default HomePage
