import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import CarouselComponent from 'src/components/Carousel/Carousel'
import Navbar from 'src/components/Navbar/Navbar'

const HomePage = () => {
  const { hasRole, isAuthenticated } = useAuth()
  console.log(isAuthenticated, hasRole('SELLER'))

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Navbar />
      <div className="mx-auto mt-5 max-w-7xl">
        <div className="mx-auto max-w-7xl">
          <CarouselComponent />
        </div>
      </div>
      <p>
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
