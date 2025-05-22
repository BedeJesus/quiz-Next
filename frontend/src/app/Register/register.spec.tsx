import { render, screen } from '@testing-library/react'
import Page from './page'
import userEvent from '@testing-library/user-event'

describe('Register', () => {

  it('renders correctly', () => {
    render(<Page />)
    expect(screen.getByPlaceholderText('Digite sua questão')).toBeInTheDocument()
  })

  it('allows to create a question', async () => {
    render(<Page />)
    const user = userEvent.setup()

    const questionInput = screen.getByPlaceholderText('Digite sua questão')
    await user.type(questionInput, 'Qual é a capital do Brasil?')
    expect(questionInput).toHaveValue('Qual é a capital do Brasil?')

    const firstAnswerInput = screen.getByPlaceholderText('Digite a primeira resposta')
    await user.type(firstAnswerInput, 'São Paulo')
    expect(firstAnswerInput).toHaveValue('São Paulo')

    const secondAnswerInput = screen.getByPlaceholderText('Digite a segunda resposta')
    await user.type(secondAnswerInput, 'Rio de Janeiro')
    expect(secondAnswerInput).toHaveValue('Rio de Janeiro')

    const thirdAnswerInput = screen.getByPlaceholderText('Digite a terceira resposta')
    await user.type(thirdAnswerInput, 'Brasília')
    expect(thirdAnswerInput).toHaveValue('Brasília')

    const forthAnswerInput = screen.getByPlaceholderText('Digite a quarta resposta')
    await user.type(forthAnswerInput, 'Salvador')
    expect(forthAnswerInput).toHaveValue('Salvador')

    const correctAnswerInput = screen.getByRole('button', { name: '3' })
    await user.click(correctAnswerInput)

    const nextQuestionButton = screen.getByRole('button', { name: 'Próxima Pergunta' })
    await user.click(nextQuestionButton)

    expect(screen.getByText('Questão 2:')).toBeInTheDocument()

  })

  jest.setTimeout(10000);

  it('allows to create a quiz', async () => {

    render(<Page />)
    const user = userEvent.setup()

    for (let i = 1; i <= 5; i++) {
      const questionInput = screen.getByPlaceholderText('Digite sua questão')
      await user.type(questionInput, `Qual é a capital do Brasil? ${i}`)

      const firstAnswerInput = screen.getByPlaceholderText('Digite a primeira resposta')
      await user.type(firstAnswerInput, `São Paulo ${i}`)

      const secondAnswerInput = screen.getByPlaceholderText('Digite a segunda resposta')
      await user.type(secondAnswerInput, `Rio de Janeiro ${i}`)

      const thirdAnswerInput = screen.getByPlaceholderText('Digite a terceira resposta')
      await user.type(thirdAnswerInput, `Brasília ${i}`)

      const forthAnswerInput = screen.getByPlaceholderText('Digite a quarta resposta')
      await user.type(forthAnswerInput, `Salvador ${i}`)

      const correctAnswerInput = screen.getByRole('button', { name: '3' })
      await user.click(correctAnswerInput)

      if (i === 5) {
        const submitButton = screen.getByRole('button', { name: 'Cadastrar Quiz' })
        await user.click(submitButton) 
      } else {
        const nextQuestionButton = screen.getByRole('button', { name: 'Próxima Pergunta' })
        await user.click(nextQuestionButton)
      }
    }

    expect(screen.getByText('Questão 5:')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Digite a quarta resposta')).toHaveDisplayValue('Salvador 5')

  })

})
