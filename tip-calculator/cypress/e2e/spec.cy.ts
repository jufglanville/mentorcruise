describe('Tip Calculator App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('successfully loads', () => {
    cy.visit('/');
  });

  it('Allows user to enter bill amount', () => {
    cy.get('input[name="input_bill"]').type('100').should('have.value', '100');
  });

  it('Allows user to enter number of people', () => {
    cy.get('input[name="input_people"]').type('2').should('have.value', '2');
  });

  it('Allows user to enter a custom tip value', () => {
    cy.get('input[name="input_custom"]').type('18').should('have.value', '18');
  });

  it('Allows user to select a percentage tip amount', () => {
    cy.get('button').contains('5%').click();
  });

  it('Allows user to clear input contents and Custom Tip Input with Reset button', () => {
    const billInput = cy.get('input[name="input_bill"]');
    const peopleInput = cy.get('input[name="input_people"]');
    const customInput = cy.get('input[name="input_custom"]');
    const resetButton = cy.get('button').contains('RESET');

    billInput.type('100').should('have.value', '100');
    peopleInput.type('2').should('have.value', '2');
    customInput.type('18').should('have.value', '18');
    resetButton.click();

    billInput.should('have.value', '');
    peopleInput.should('have.value', '');
    customInput.should('have.value', '');
  });

  it('Allows user to clear input contents and deselect Tip % with Reset button', () => {
    const inputBill = cy
      .get('input[name="input_bill"]')
      .type('100')
      .should('have.value', '100');
    const inputPeople = cy
      .get('input[name="input_people"]')
      .type('2')
      .should('have.value', '2');
    cy.get('button')
      .contains('10%')
      .should('have.css', 'background-color', 'rgb(0, 73, 77)');

    cy.get('button')
      .contains('10%')
      .click()
      .should('have.css', 'background-color', 'rgb(38, 192, 171)');

    cy.get('button').contains('RESET').click();

    inputBill.should('have.value', '');
    inputPeople.should('have.value', '');
    cy.get('button')
      .contains('10%')
      .should('have.css', 'background-color', 'rgb(0, 73, 77)');
  });

  it('Correctly calculates tip amount and total per person', () => {
    cy.get('input[name="input_bill"]').type('100').should('have.value', '100');
    cy.get('input[name="input_people"]').type('2').should('have.value', '2');
    cy.get('button').contains('10%').click();

    cy.get('p[id="tip-amount-output"]').contains('$5.00');
    cy.get('p[id="total-output"]').contains('$55.00');
  });
});
