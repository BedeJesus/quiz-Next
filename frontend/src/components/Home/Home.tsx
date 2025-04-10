import {Container, StyledLink} from './styles'

export default function Home() {
    return (
        <Container>

            <h1>Bem-vindo ao Quiz</h1>

            <div className="buttons">
                <StyledLink href='/SelectQuiz'>Iniciar Quiz</StyledLink>
                <StyledLink href='/Register'>Cadastrar Quiz</StyledLink>
            </div>

        </Container>
    )
}