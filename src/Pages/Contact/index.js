import React from 'react'
import { LayoutContainer } from '../components/LayoutContainer'
import { LayoutHeader } from '../components/LayoutHeader'
import { LayoutMain } from '../components/LayoutMain'
import { LayoutFooter } from '../components/LayoutFooter'

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
