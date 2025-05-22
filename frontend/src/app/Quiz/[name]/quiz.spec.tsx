import { render, screen } from '@testing-library/react'
import QuizClient from './QuizClient'
import userEvent from '@testing-library/user-event'


describe('Quiz', () => {

    const quizQuestions = [
        {
            title: 'Qual acorde é um acorde maior?',
            firstAnswer: 'G#m',
            secondAnswer: 'Am7',
            thirdAnswer: 'Cmaj7',
            fourthAnswer: 'Edim',
            correctAnswer: 3,
        },
        {
            title: 'sei la, 2',
            firstAnswer: '12312',
            secondAnswer: '3123',
            thirdAnswer: '12313',
            fourthAnswer: '12312',
            correctAnswer: 2,
        },
        {
            title: 'sei la 3',
            firstAnswer: '312312',
            secondAnswer: '2131',
            thirdAnswer: '3',
            fourthAnswer: '31231',
            correctAnswer: 3,
        }
    ]

    const user = userEvent.setup()

    it('plays a quiz', async () => {
        render(<QuizClient questions={quizQuestions} quizName={'teste'} />)

        for (let i = 1; i <= quizQuestions.length; i++) {

            const answerButton = screen.getAllByRole('button')
            await user.click(answerButton[i])

            const nextButton = i != quizQuestions.length ?
                screen.getByRole('button', { name: 'Próxima' }) :
                screen.getByRole('button', { name: 'Responder' })

            await user.click(nextButton)
        }

        expect(screen.getByText(`O seu resultado foi...`)).toBeInTheDocument()
    })
})