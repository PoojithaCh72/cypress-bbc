import login from '../selectors/login.sel'

function getUsername() {
    return cy.get(login.username)
}

function getPassword() {
    return cy.get(login.password)
}

function getSignInButton() {
    return cy.get(login.sign_button)
}

function enterInputField(field, value) {
    field.type(value)
}

function clickLogin() {
    getSignInButton().click()
}

beforeEach(() => {
    cy.visit('https://www.bbc.co.uk/news')
    cy.get('#idcta-link', { timeout: 7000 }).click()
})

describe('LoginPage', () => {
    it('check all fields are visible', () => {
        getUsername().should('be.visible')
        getPassword().should('be.visible')
        getSignInButton().should('be.visible')
        cy.get('.button__label > .sb-link > span').should('be.visible')
    })

    it('check the signin error when password is invalid', () => {
        enterInputField(getPassword(), '@@££@@££')
        clickLogin()
        cy.get(login.error_message_password, { timeout: 7000 })
            .should('have.text', "Sorry, that password isn't valid. Please include a letter.")
    })

    it('check the signin error when username and password is empty', () => {
        clickLogin()
        cy.get(login.error_message_password, { timeout: 7000 })
            .should('have.text', "Something's missing. Please check and try again.")
    })


    it('check the signin error when password is short', () => {
        enterInputField(getUsername(), 'km')
        enterInputField(getPassword(), 'admin')
        clickLogin()
        cy.get(login.error_message_password, { timeout: 7000 })
            .should('have.text', 'Sorry, that password is too short. It needs to be eight characters or more.')
    })
})