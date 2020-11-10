describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://www.baidu.com/');
        // expect(true).to.equal(false);
        cy.contains('百度一下').click();
        cy.get('#kw')
            .type('baidu{enter}');
        cy.url().should('include', 'wd=baidu');
    });
});
