import React from 'react'
import {
  LayoutContainer,
  LayoutHeader,
  LayoutMain,
  LayoutFooter
} from '../layouts/LayoutPage'

export const PageContact = () => {
  return (
    <LayoutContainer>
      <LayoutHeader>
        <h2>Cabeçalho</h2>
      </LayoutHeader>
      <LayoutMain>
        <h2>Corpo</h2>
      </LayoutMain>
      <LayoutFooter>
        <h2>Rodapé</h2>
      </LayoutFooter>
    </LayoutContainer>
  )
}
