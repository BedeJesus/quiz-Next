describe('Testing creating and playing a quiz', () => {

    it('should play a quiz correctly', () => {
        cy.visit('http://localhost:3000')

        cy.get('a').contains('Iniciar Quiz').click()
        cy.get('div').contains('Selecione um Quiz').click()
        cy.get('div').contains('Teoria Musical').click()

        for (let i = 1; i <= 3; i++) {
            cy.get('button').contains('1').click()
            let buttonText = i != 3 ? 'Próxima' : 'Responder';
            cy.get('button').contains(buttonText).click()
        }
        cy.get('h1').contains('O seu resultado foi...').should('be.visible')
    })


    it('should create and play a quiz correctly', () => {
        cy.visit('http://localhost:3000/Register')

        let quizName = 'Teste de Quiz 4'
        let questionNumber = 5;

        cy.get('input[name="group"]').type(quizName)
        cy.get('input[name="group"]').should('have.value', quizName)

        for (let i = 1; i <= questionNumber; i++) {
            cy.get('input[name="title"]').type(`Qual é a capital do Brasil? + ${quizName} ${i}`)
            cy.get('input[name="firstAnswer"]').type(`São Paulo + ${quizName}  ${i}`)
            cy.get('input[name="secondAnswer"]').type(`Rio de Janeiro + ${quizName}  ${i}`)
            cy.get('input[name="thirdAnswer"]').type(`Brasília + ${quizName}  ${i}`)
            cy.get('input[name="fourthAnswer"]').type(`Salvador + ${quizName}  ${i}`)

            cy.get('button').contains(`${1}`).click()

            if (i == questionNumber) {
                cy.get('button').contains('Cadastrar Quiz').click()
                cy.get('button').contains('Crie pelo menos 5 perguntas').should('not.exist')
            } else {
                cy.get('button').contains('Próxima Pergunta').click()
            }
        }

        cy.contains('Quiz criado com sucesso!').should('be.visible')

        cy.visit('http://localhost:3000')

        cy.get('a').contains('Iniciar Quiz').click()
        cy.get('div').contains('Selecione um Quiz').click()
        cy.get('div').contains(quizName).click()

        for (let i = 1; i <= questionNumber; i++) {
            cy.get('button').contains('1').click()
            let buttonText = i != questionNumber ? 'Próxima' : 'Responder';
            cy.get('button').contains(buttonText).click()
        }

        cy.get('h1').contains('O seu resultado foi...').should('be.visible')

    })


})
