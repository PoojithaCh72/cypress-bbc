///<reference types = "cypress"/>

describe('HomePage', () => {
    it('check the given fields are visible', () => {
        cy.visit('https://www.bbc.co.uk/news')
        // visiblity of SignIn icon 
        cy.get('#idcta-link', { timeout: 4000 })
            .should('be.visible')

        cy.contains('England').should('have.text', 'England')
        cy.contains('N. Ireland').should('have.text', 'N. Ireland')
        cy.contains('Scotland').should('have.text', 'Scotland')
    })
})