import React, { useRef } from 'react'

import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'

interface CarouselComponentProps {
  slides: string[]
  maw: number
  slideSize: string
  slideToScroll: number
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  slides,
  maw,
  slideSize,
  slideToScroll,
}) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }))
  return (
    <Carousel
      withIndicators
      slideSize={slideSize}
      loop
      slidesToScroll={slideToScroll}
      slideGap="md"
      plugins={[autoplay.current]}
      breakpoints={[{ maxWidth: 'sm', slideSize: '70%' }]}
    >
      {slides.map((slide, index) => (
        <Carousel.Slide key={index}>
          <Image maw={maw} src={slide} />
        </Carousel.Slide>
      ))}
    </Carousel>
  )
}

export default CarouselComponent
