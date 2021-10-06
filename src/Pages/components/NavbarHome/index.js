import React from 'react'
import { Products, Developers, Company } from './Content'

import {
  DropdownProvider,
  DropdownOpction,
  DropdownRoot
} from './Content/Dropdown'
import { Container, DropdownStyles } from './styleNavHome'

export function NavbarHome() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
          <ul>
            <li>
              <DropdownOpction
                name="Produtos"
                content={Products}
                backgroundHeight={'286'}
              />
            </li>
            <li>
              <DropdownOpction
                name="Serviços"
                content={Developers}
                backgroundHeight={'167'}
              />
            </li>
            <li>
              <DropdownOpction
                name="Empresa"
                content={Company}
                backgroundHeight={'200'}
              />
            </li>
            {/* <li>
              <DropdownOpction
                name="Login"
                content={Login}
                backgroundHeight={'200'}
              />
            </li> */}
          </ul>
        </Container>
        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  )
}
