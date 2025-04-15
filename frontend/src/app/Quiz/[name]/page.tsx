import api from '@/utils/api'
import QuizClient from './QuizClient'

interface Props {
    params: { name: string }
}

export default async function QuizPage({ params }: Props) {

    const { name } = await params;
    const nameDecoded = decodeURIComponent(name)
    try {
        const response = await api.get('/questions/ten', {
            params: { name: nameDecoded }
        });

        const quiz = response.data.quiz;

        console.log(quiz)

        return <QuizClient questions={quiz.questions} quizName={quiz.name} />;
    } catch (error) {

        throw new Error('Erro ao carregar as perguntas.');
    }
}
