describe('Element get test', () => {

    it('element get testing', () => {
        cy.visit('https://www.freshworks.com')
        cy.contains('Platform').click()
        cy.url().should('include', '/platform')

        cy.get('.nav-label span : nth-of-type(2)')
            .should('be.visible')
            .and('contain', 'Our Platform')
            .and('have.length', '1')


        cy.get("ul.footer-nav li ")
            .find("a[href*='footer']")
            .should('have.length', 5);
    })

    it('Amazon search Test', () => {
        cy.visit('https://www.amazon.com')
        cy.get('.nav - search - field').within(() => {
            cy.get('#twotabsearchtextbox').type("Apple mac book pro")
        })
    })

    it('BAck and forward actions', () => {
        cy.visit('https://www.freshworks.com')
        cy.contains('Platform').click()

        cy.go('back')

        cy.wait(200)
        cy.go('forward')

        cy.reload()



    })

    it('Dropdown selection', () => {
        cy.visit('')
        cy.get('').select('Value')

    })

    it('check box', () => {
        cy.visit('')
        cy.get('').check();
        cy.get('').uncheck();

    });

    //Shadow dom handling
    it('Assert H2 text within Shadow DOM', () => {
        cy.get('button').click()
        cy.get('div#shadowHost')
            .shadow()
            .find('h2')
            .should('have.text', 'I belong to Shadow DOM')
    });
})