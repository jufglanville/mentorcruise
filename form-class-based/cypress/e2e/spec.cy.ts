describe('Class Based Form', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('successfully loads', () => {
    cy.visit('/');
  });

  it('allows a user to enter a first name', () => {
    cy.get('input[id="first-name"]')
      .type('John')
      .should('have.value', 'John')
  });

  it('allows a user to enter a last name', () => {
    cy.get('input[id="last-name"]')
      .type('Doe')
      .should('have.value', 'Doe')
  });

  it('allows a user to enter an email', () => {
    cy.get('input[id="email-address"]')
      .type('john.doe@mail.com')
      .should('have.value', 'john.doe@mail.com')
  });

  it('allows a user to enter a password', () => {
    cy.get('input[id="password"]')
      .type('Password123')
      .should('have.value', 'Password123')
  });

  it('will show "required" error messages when no input entered', () => {
    const firstName = cy.get('input[id="first-name"]');
    const lastName = cy.get('input[id="last-name"]');
    const email = cy.get('input[id="email-address"]');
    const password = cy.get('input[id="password"]');

    cy.get('button')
      .click();

    firstName.siblings('p').contains('First Name must not be empty.');
    lastName.siblings('p').contains('Last Name must not be empty.');
    email.siblings('p').contains('Email Address must not be empty.');
    password.siblings('p').contains('Password must not be empty.');
  });

  it('will show validation error messages when incorrect input entered', () => {
    const firstName = cy.get('input[id="first-name"]').type('12');
    const lastName = cy.get('input[id="last-name"]').type('a');
    const email = cy.get('input[id="email-address"]').type('hello@test');
    const password = cy.get('input[id="password"]').type('abc');

    cy.get('button')
      .click();

    firstName.siblings('p').contains('First Name must be at least 2 characters long and contain only letters, apostrophes, and hyphens.');
    lastName.siblings('p').contains('Last Name must be at least 2 characters long and contain only letters, apostrophes, and hyphens.');
    email.siblings('p').contains('Email Address must be a valid email address.');
    password.siblings('p').contains('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.');
  });

  it('will allow a user to submit a form if inputs are valid', () => {

    cy.on('window:console', (consoleLog) => {
      if (consoleLog.type === 'log') {
        cy.get('.console-log').contains('[{"first-name":"John"},{"last-name":"Doe"},{"email-address":"john.doe@mail.com"},{"password":"Password123"}]');
      }
    });

    cy.get('input[id="first-name"]').type('John');
    cy.get('input[id="last-name"]').type('Doe');
    cy.get('input[id="email-address"]').type('john.doe@mail.com');
    cy.get('input[id="password"]').type('Password123');

    cy.get('button')
      .click();
  });
})