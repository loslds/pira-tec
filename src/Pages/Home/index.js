import React from 'react'
import styled from 'styled-components'
import logoEmp from '../../assets/image/logosys.png'

const MainContainer = styled.div`
  padding: 0 auto;
  margin: 0 auto;
  border: 0;
  max-width: 980px;
  height: 100%;
  display: block;
  div {
    padding: 0px;
    margin: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center center;
    justify-content: center;
  }
  @media (min-width: 100vh) {
    justify-content: center;
  }
`

const MainContainerBox = styled.div`
  border: 1px red dashed;
  height: 100vh;
  min-width: 250px;
  background-color: transparent;
  display: flex row wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`

const MainContainerImg = styled.div`
  border: 1px yellow dashed;
  height: 100vh;
  min-width: 450px;
  display: block;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: transparent;
`

export const PageHome = () => {
  return (
    <MainContainer>
      <MainContainerBox>
        <div>
          <MainContainerImg>
            <div>
              <img src={logoEmp} alt="LOGO" title="LOGO TESTE" width="550" />
              <img src={logoEmp} alt="LOGO" title="LOGO TESTE" width="550" />
              <img src={logoEmp} alt="LOGO" title="LOGO TESTE" width="550" />
            </div>
          </MainContainerImg>
        </div>
      </MainContainerBox>
    </MainContainer>
  )
}

// import {
//   ContainerMainPage,
//   ContainerFlexPage,
//   ContainerCardPage,
//   ContainerTextPage
// } from '../../styles/styles'
// import TitlePage from '../layouts/LayoutTitlePage'
// export const PageHome = () => {
//   return (
//     <ContainerMainPage>
//       <ContainerFlexPage>
//         <ContainerCardPage>
//           <TitlePage title={'Bem Vindo'} />
//           <ContainerTextPage>
//             <p>
//               O Systema esta adequado a tratar as Informações com eficiência e
//               fidelidade de acôrdo com o exercício do Usuário.
//             </p>

//             <p>
//               Estaremos trabalhando com apenas 3 (trez) Opções no Menu
//               Principal, os quais estão delegados as Rotinas dentro de opções
//               que determinarão o desenvolvimento do sistema integrado.
//             </p>

//             <p>
//               Todas evoluem de acordo com seus próprios princípios de requerer,
//               guardar e publicar as informações dentro destes par lhes ser útil
//               o necessário.
//             </p>

//             <p>
//               Em nosso MENU PRINCIPAL encontranos as opções:{' '}
//               <ul>
//                 <li>
//                   <h4>1 - EMPRESA.</h4>
//                   <p>Contendo as seguintes opções: para ACESSO ao Sistema, </p>
//                 </li>
//                 <li>2 - PRODUTOS.</li>
//                 <li>3 - SERVIÇOS.</li>
//               </ul>
//             </p>
//           </ContainerTextPage>
//         </ContainerCardPage>
//       </ContainerFlexPage>
//     </ContainerMainPage>
//   )
// }
