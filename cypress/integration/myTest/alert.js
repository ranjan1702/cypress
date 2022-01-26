describe('Tutorialspoint Test', function () {

    it('Scenario 1', function () {

        cy.visit("https://register.rediff.com/register/register.php");

        cy.get('input[type="submit"]').click();

        cy.on('window:alert', (t) => {

            expect(t).to.contains('Your full name');
        })
    });
});