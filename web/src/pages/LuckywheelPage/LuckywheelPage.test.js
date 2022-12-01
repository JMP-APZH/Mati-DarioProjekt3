import { render } from '@redwoodjs/testing/web'

import LuckywheelPage from './LuckywheelPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LuckywheelPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LuckywheelPage />)
    }).not.toThrow()
  })
})
