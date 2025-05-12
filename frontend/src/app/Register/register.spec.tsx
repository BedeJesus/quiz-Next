import { render, screen } from '@testing-library/react'
import Page from './page'
import '@testing-library/jest-dom'

describe('Register', () => {

  it('renders correctly', () => {
    render(<Page/>)
    expect(screen.getByPlaceholderText('Digite sua questão')).toBeInTheDocument()
  })

})
