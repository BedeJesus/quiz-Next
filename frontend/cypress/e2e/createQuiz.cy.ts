describe('Create Quiz App', () => {

    it('should create a quiz correctly', () => {
        cy.visit('http://localhost:3000/Register')

        let quizName = 'Teste de Quiz 3'

        cy.get('input[name="group"]').type(quizName)
        cy.get('input[name="group"]').should('have.value', quizName)

        for (let i = 1; i <= 5; i++) {
            cy.get('input[name="title"]').type(`Qual é a capital do Brasil? + ${quizName} ${i}`)
            cy.get('input[name="firstAnswer"]').type(`São Paulo + ${quizName}  ${i}`)
            cy.get('input[name="secondAnswer"]').type(`Rio de Janeiro + ${quizName}  ${i}`)
            cy.get('input[name="thirdAnswer"]').type(`Brasília + ${quizName}  ${i}`)
            cy.get('input[name="fourthAnswer"]').type(`Salvador + ${quizName}  ${i}`)

            cy.get('button').contains(`${1}`).click()

            if (i == 5) {
                cy.get('button').contains('Cadastrar Quiz').click()
                cy.get('button').contains('Crie pelo menos 5 perguntas').should('not.exist')
            } else {
                cy.get('button').contains('Próxima Pergunta').click()
            }
        }

        cy.contains('Quiz criado com sucesso!').should('be.visible')

    })
})
