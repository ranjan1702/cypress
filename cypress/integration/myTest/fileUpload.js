
describe('File upload', () => {
    it.skip("Multiple File Upload - Drag Drop", () => {
        cy.visit("     ");
        cy.get("input#file-upload2")
            .attachFile("dog.jpg")
            .attachFile("example.json")
            .attachFile("yey.jpg");
    });
})
