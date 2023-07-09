import { render } from '@redwoodjs/testing/web'

import Carousel from './Carousel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Carousel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Carousel />)
    }).not.toThrow()
  })
})
