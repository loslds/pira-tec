import styled from 'styled-components'

export const ContainerMainApp = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 0 auto;
  border: 1px red dotted;
`
export const ContainerMainPage = styled.div`
  border: 0px;
  top: 0px;
  max-width: 900px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: Black;
  background-color: transparent;
`
export const ContainerFlexPage = styled.div`
  margin: 10px auto;
  padding: 10px auto;
  border: 2px black solid;
  border-radius: 10px;
  width: 98%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: transparent;
`
export const ContainerCardPage = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 50px;
  min-height: 50px;
  background-color: yellow;
  display: flex;
  align-items: center;
`
export const ContainerTextPage = styled.div`
  border: 1px red dashed;
  padding: 0px 0px 0px 8px;
  margin-left: 5px;
  margin-bottom: 5px;
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  h5 {
    margin-left: 25px;
    font-size: 14px;
    color: blue;
  }
`
