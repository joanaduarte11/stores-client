import React from 'react'
import { UserForm } from './index'

describe('<UserForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserForm />)
  })
})