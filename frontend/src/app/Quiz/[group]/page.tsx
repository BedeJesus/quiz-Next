import api from '@/utils/api'
import QuizClient from './QuizClient'

interface Props {
    params: { group: string }
}

export default async function QuizPage({ params }: Props) {
    try {
        const response = await api.get('/questions/ten', {
            params: { group: params.group }
        });

        const questions = response.data.questions;

        return <QuizClient questions={questions} />;
    } catch (error) {
  
        throw new Error('Erro ao carregar as perguntas.');
    }
}
