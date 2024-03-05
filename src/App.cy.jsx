import React from 'react'
import App from './App'
import { useApp } from './useApp';

describe("Testando o componente App", () => {
  it("o componente deverá renderizar ao iniciar a página", () =>{
    cy.mount(<App />);
  });

  it("deverá existir um título no componente", () => {
    const app = cy.mount(<App />);
    app
      .get("[data-cy=title]")
      .should("have.text", 'Título');
  });

  it("o calculo deverá retornar um número", () => {
    const { sum } = useApp();
    const soma = sum(5, 8);
    expect(soma).to.equal(13);
  });

  it("o array deverá ter 3 itens", () =>{
    const arr = [1, 2, 3];
    expect(arr).to.have.lengthOf(3);
  });

  it("o nome alterado deverá ser igual ao nome atual", () => {
    const { handleNewName, name} = useApp();
    const newName = handleNewName("Joana")
    expect('Joana').to.equal(newName)
  });

  
})