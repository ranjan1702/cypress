describe('Dropdown selection', () => {
    it('select cypress from the dropdown', () => {
        cy.visit('dbvhdvhd')
        cy.get('#element').select('value').should('have.value', 'value')

        //select multiple value
        cy.get('select').select(['cypesss', 'JavaScript'])
    })
})