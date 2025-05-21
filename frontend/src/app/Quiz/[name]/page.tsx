import api from '@/utils/api';
import QuizClient from './QuizClient';


type PageProps = {
    params: Promise<{ name: string }>;
};

export default async function QuizPage({ params }: PageProps) {

    const { name } = await params;
    const nameDecoded = decodeURIComponent(name);

    try {
        const response = await api.get('/questions/ten', { params: { name: nameDecoded } });

        const quiz = response.data.quiz;

        return <QuizClient questions={quiz.questions} quizName={quiz.name} />;
    } catch (error) {

        throw new Error('Erro ao carregar as perguntas.');
    }
}
