import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 0 auto;
  margin: 0 auto;
  border: 0;
  max-width: 980px;
  height: 100%;
  display: flex;
  div {
    margin-top: 2.5px;
    margin-bottom: 2.5px;
    margin-top: 2.5px;
    margin-bottom: 2.5px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 100vh) {
    justify-content: center;
  }
`
export const MainContainerBox = styled.div`
  height: 100vh;
  min-width: 250px;
  background-color: transparent;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`
export const MainContainerImg = styled.div`
  padding: 0px;
  margin: 0px;
  height: 100px;
  width: 130px;
  display: block;
  background-color: transparent;
`
export const MainBoxComplement = styled.div`
  padding: 0px;
  margin: 0px;
  height: 100px;
  width: 200px;
  display: block;
  background-color: transparent;
`
