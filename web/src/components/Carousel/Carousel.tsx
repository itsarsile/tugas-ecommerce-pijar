import { Carousel } from '@mantine/carousel'

const CarouselComponent = () => {
  return (
    <Carousel
      withIndicators
      slideSize="50%"
      loop
      slidesToScroll={1}
      slideGap="md"
    >
      <Carousel.Slide>
        <img
          src="./images/carousel_1.png"
          alt="carousel-img"
          className="w-[800px]"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="./images/carousel_1.png"
          alt="carousel-img"
          className="w-[800px]"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="./images/carousel_1.png"
          alt="carousel-img"
          className="w-[800px]"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="./images/carousel_1.png"
          alt="carousel-img"
          className="w-[800px]"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="./images/carousel_1.png"
          alt="carousel-img"
          className="w-[800px]"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <img
          src="./images/carousel_1.png"
          alt="carousel-img"
          className="w-[800px]"
        />
      </Carousel.Slide>
    </Carousel>
  )
}

export default CarouselComponent
