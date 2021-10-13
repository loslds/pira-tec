import styled from 'styled-components'

export const BtnContainer = styled.div`
  border: 0px;
  padding: 5px auto;
  margin-left: 2px;
  margin-right: 2px;
  width: 350px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`
export const Btn = styled.button`
  border: 0px;
  border-radius: 10px;
  padding: 0 auto;
  margin: 0 auto;
  width: 45px;
  height: 45px;
  display: block;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-image: url(${({ img }) => img});
`
