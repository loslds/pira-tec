import styled from 'styled-components'
import semimg from '../../../assets/image/semimg.svg'

export const BarContainer = styled.div`
  border: 0px;
  padding: 0;
  margin: 0;
  min-height: 50px;
  width: 100%;
  max-width: 100%;
  display: flex;
  background-color: ${({ color }) => color};
`
export const BarFlex = styled.div`
  border: 0px;
  min-height: 50px;
  width: 900px;
  padding: 0px auto;
  margin: 0px auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-size: 24px;
  div {
    padding: 4px;
  }
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`
export const Img = styled.img`
  max-height: 48px;
  padding: 0;
  margin: 0;
  display: block;
`
export const BarColLeft = styled.div`
  border: 0px;
  padding: 4px auto;
  margin: 4px auto;
  min-width: 49%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`
export const BarColRight = styled.div`
  /* border: 1px red solid; */
  border: 0px;
  padding: 4px auto;
  margin: 4px auto;
  min-width: 20%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`
export const ContainerItemLink = styled.div`
  margin: 0px 4px 0px 4px;
  padding: 0px 4px 0px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  font-size: 20px;
  div {
    border: 0px;
    margin: 0 auto;
    padding: 0px 10px;
  }
`
export const ButtomMenu = styled.button`
  border: 5px black solid;
  border-radius: 10px;
  margin: 5px auto;
  padding-left: 5px;
  margin: 5px auto;
  height: 50px;
  width: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  font-size: 20px;
  cursor: pointer;
  /* background-image: url(${({ img }) => semimg}); */
  background-size: 40px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left;
  background-color: transparent;
  opacity: 0.5;
`

// export const ImageMenu = styled.img`
//   padding: 0 auto;
//   margin: 0 auto;
//   display: block;
//   height: 45px;
//   width: 45px;
//   /* background-image: url('../../../assets/image/semimg.svg'); */
// `
export const ContainerDataCompany = styled.div`
  border: 1px black solid;
  border-radius: 10px;
  padding: 5px auto;
  margin-left: 2px;
  margin-right: 2px;
  height: 170px;
  width: 350px;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-content: center;
  align-items: center;
  > p {
    font-style: normal;
    font-size: 10pt;
  }
`
