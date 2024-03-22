describe('automationexercise test_cases', () => {
  it('Register User', () => {
    cy.visit('http://automationexercise.com');
    cy.get('.shop-menu > .nav > :nth-child(4)').click();
    cy.get('.signup-form > h2').should('have.text', 'New User Signup!');
    cy.get('[data-qa="signup-name"]').type('xatia');
    cy.get('[data-qa="signup-email"]').type('xatia@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get(':nth-child(1) > b').should('exist');
    cy.get(':nth-child(4) > .top').click();
    cy.get('[data-qa="name"]').type('xatia');
    cy.get('[data-qa="email"]').type('xatia@gmail.com');
    cy.get('[data-qa="password"]').type('123');

    cy.get('#newsletter').click();
    cy.get('#optin').click();
    cy.get('[data-qa="first_name"]').type('xatia');
    cy.get('[data-qa="last_name"]').type('pasikshvili');
    cy.get('[data-qa="create-account"]').click();
    cy.get('b').should('exist');
    cy.get('[data-qa="continue-button"]').click();
    cy.get(':nth-child(10) > a').should('exist');
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
  });
});
