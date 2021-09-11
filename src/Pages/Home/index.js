import React from 'react'
import styled from 'styled-components'
import { ContainerMain } from '../stylePages'

const ContainerHome = styled.div`
  margin: 10px auto;
  padding: 10px auto;
  border: 1px red solid;
  border-radius: 10px;
  height: 100px;
  width: 98%;
  background-color: transparent;
  display: flex;
  justify-content: center;
`
// const ContainerHomeTitle = styled.div`
//   margin: 0px auto;
//   padding: 10px auto;
//   border: 1px red solid;
//   width: 100%;
//   background-color: transparent;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   align-content: space-between;
//   /*
//   align-content: center;
//    */
// `

export const ContainerCard = styled.div`
  border: 0px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 27px;
  display: flex;
  background-color: #494949;
  color: white;
`
// export const ContainerCard = styled.div`
//   border: 0px;
//   border-top-left-radius: 2px;
//   border-top-right-radius: 2px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   min-height: 27px;
//   display: flex;
//   background-color: #494949;
//   color: white;
// `

export const PageHome = () => {
  return (
    <ContainerMain>
      <ContainerHome>
        <ContainerCard>
          {/* <ContainerHomeTitle> */}
          <h1>HOME PAGE</h1>
          {/* </ContainerHomeTitle> */}
        </ContainerCard>
      </ContainerHome>
    </ContainerMain>
  )
}
