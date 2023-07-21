import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Filter from '.'

describe('<Filter />', () => {
  test('should call onClick function when clicked', async () => {

    const fnOnClick = jest.fn()

    render(<Filter id='filter-id' name='filter-name' onClick={fnOnClick} />)

    const label = screen.getByRole('button')

    await userEvent.click(label)
    expect(fnOnClick).toHaveBeenCalled()
  })

})