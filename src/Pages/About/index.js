import React from 'react'
import {
  ContainerMainPage,
  ContainerFlexPage,
  ContainerCardPage,
  ContainerTextPage
} from '../../styles/styles'
import { LayoutTitlePage } from '../layouts/LayoutTitlePage'
import { ContainerFormAbout } from './stylesContact'

export const PageAbout = () => {
  return (
    <ContainerMainPage>
      <ContainerFlexPage>
        <ContainerCardPage>
          <LayoutTitlePage title={'SOBRE'} />
          <ContainerTextPage>
            <ContainerFormAbout>
              <h1>PAGE ABOUT</h1>
            </ContainerFormAbout>
          </ContainerTextPage>
        </ContainerCardPage>
      </ContainerFlexPage>
    </ContainerMainPage>
  )
}
