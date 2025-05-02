describe('TESTANDO', () => {
    it('Testes 1', () => {
      cy.visit('https://www.google.com/');
      cy.wait(3000)
      cy.contains('Estou com sorte')
    })

    it('Testes 2', () => {
      cy.visit('https://www.google.com/');
      cy.wait(3000)
      cy.contains('Pesquisa Google')
    })
});
  