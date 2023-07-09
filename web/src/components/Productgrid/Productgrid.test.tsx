import { render } from '@redwoodjs/testing/web'

import Productgrid from './Productgrid'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Productgrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Productgrid />)
    }).not.toThrow()
  })
})
