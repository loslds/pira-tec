import React from 'react'
import {
  ContainerMainPage,
  ContainerFlexPage,
  ContainerCardPage,
  ContainerTextPage
} from '../../styles/styles'
import { LayoutTitlePage } from '../layouts/LayoutTitlePage'
import styled from 'styled-components'

const ContainerFormLogin = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  height: 100px;
  width: 300px;
  border: 2px red solid;
`

export const PageLocate = () => {
  return (
    <ContainerMainPage>
      <ContainerFlexPage>
        <ContainerCardPage>
          <LayoutTitlePage title={'LOCAL'} />
          <ContainerTextPage>
            <ContainerFormLogin>
              <h1>PAGE LOCALIZAÇÃO</h1>
            </ContainerFormLogin>
          </ContainerTextPage>
        </ContainerCardPage>
      </ContainerFlexPage>
    </ContainerMainPage>
  )
}
