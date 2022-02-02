import React from 'react'
import styled from 'styled-components'
import logoEmp from '../../assets/image/logosys.png'

const MainContainer = styled.div`
  border: 0px;
  padding: 0;
  margin: 0;
  min-height: 50px;
  width: 100%;
  max-width: 100%;
  display: flex;
  background-color: transparent;
`
const MainFlex = styled.div`
  border: 0px;
  min-height: 50px;
  width: 900px;
  padding: 0px auto;
  margin: 0px auto;
  display: flex;
  flex-flow: row wrap;
  font-size: 12px;
  background-color: transparent;
  div {
    padding: 2.5px;
  }
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`
const MainCompany = styled.div`
  border: 2px red solid;
  padding: 2.5px auto;
  margin: 2.5px auto;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  flex-flow: nowrap;
  align-content: center;
  align-items: center;
`
const MainImg = styled.div`
  border: 2px grey solid;
  padding: 0 auto;
  margin: 0 auto;
  height: 98%;
  width: 130px;
  display: flex;
`
const MainCompany1 = styled.div`
  border: 2px black solid;
  padding: 2.5px auto;
  margin: 2.5px auto;
  height: 100px;
  width: 100%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`
export function PageHome() {
  return (
    <MainFlex>
      <MainCompany>
        <img src={logoEmp} />
        <p>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        {/* <FormCompany /> */}
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      </MainCompany>
    </MainFlex>
  )
}
