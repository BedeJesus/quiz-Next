import {Container} from './styles'
import Link from "next/link";

export default function Home() {
    return (
        <Container>

            <h1>Bem-vindo ao Quiz</h1>

            <div className="buttons">
                <Link href='/Quiz'>Iniciar Quiz</Link>
                <Link href='/Register'>Cadastrar Questão</Link>
            </div>

        </Container>
    )
}