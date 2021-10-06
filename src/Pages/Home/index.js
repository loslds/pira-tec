import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logoSys from '../../assets/image/logosys.png'
import watszap from '../../assets/image/watszap.svg'
import telefone from '../../assets/image/telefone.png'
import email from '../../assets/image/email.png'
import internet from '../../assets/image/internet.svg'
import facebook from '../../assets/image/facebook.svg'
import instagram from '../../assets/image/instagram.svg'

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
const BtnMenuContainer = styled.div`
  border: 2px green dashed;
  max-width: 310px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`
const BtnMenu = styled.button`
  display: flex;
  width: 250px;
  height: 50px;
  border: 0;
  border-radius: 10px;
  padding: 0 auto;
  background-color: '#73a4d4';
  background-repeat: no-repeat;
  background-size: 3.3em;
  background-position: left center;
  background-image: url(${({ img }) => img});
  margin: 0 3px 0 3px;
`
const listBtnMenu = [
  { id: 1, img: watszap, label: 'watszap', onClick: () => {} },
  { id: 2, img: telefone, label: 'telefone', onClick: () => {} },
  { id: 3, img: email, label: 'email', onClick: () => {} },
  { id: 4, img: internet, label: 'internet', onClick: () => {} },
  { id: 5, img: facebook, label: 'facebook', onClick: () => {} },
  { id: 6, img: instagram, label: 'instagram', onClick: () => {} }
]

export const PageHome = () => {
  const { color } = 'transparent'
  return (
    <MainContainer color={color}>
      <MainContainerBox>
        <div>
          <MainContainerImg>
            <div>
              <img src={logoSys} alt="LOGO" title="LOGO TESTE" width="450" />
            </div>
          </MainContainerImg>
        </div>
      </MainContainerBox>
      <div>
        <BtnMenuContainer>
          <div>
            {listBtnMenu.map(({ id, img, label, onClick }) => {
              return (
                <BtnMenu key={id} img={img} onClick={onClick} title={label} />
              )
            })}
          </div>
        </BtnMenuContainer>
      </div>
    </MainContainer>
  )
}
PageHome.defaultProps = {
  color: 'transparent'
}
PageHome.propTypes = {
  color: PropTypes.string
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
