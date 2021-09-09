import React from 'react'
import styled from 'styled-components'

const ContainerMain = styled.div`
  border: 1px red dashed;
  max-width: 900px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
`
export const PageHome = () => {
  return (
    <ContainerMain>
      <h1>HOME PAGE</h1>
    </ContainerMain>
  )
}
