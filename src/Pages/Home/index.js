import React from 'react'
import styled from 'styled-components'
import { ContainerMain, ContainerCard } from '../stylePages'
import TitleHome from '../layouts/LayoutTitle'

const ContainerHome = styled.div`
  margin: 10px auto;
  padding: 10px auto;
  border: 2px black solid;
  border-radius: 10px;
  width: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: transparent;
`
const ContainerTexto = styled.div`
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
  span {
  }
`

export const PageHome = () => {
  return (
    <ContainerMain>
      <ContainerHome>
        <ContainerCard>
          <TitleHome title={'Bem Vindo'} />
          <ContainerTexto>
            <p>
              O Systema esta adequado a tratar as Informações com eficiência e
              fidelidade de acôrdo com o exercício do Usuário.
            </p>
            <p>
              Estaremos trabalhando com apenas 3 (trez) Opções no Menu
              Principal, os quais estão delegados as Rotinas dentro de opções
              que determinarão o desenvolvimento do sistema integrado.
            </p>
            <p>
              Todas evoluem de acordo com seus próprios princípios de requerer,
              guardar e publicar as informações dentro destes par lhes ser útil
              o necessário.
            </p>
            <p>
              Em nosso MENU PRINCIPAL encontranos as opções:{' '}
              <ul>
                <li>
                  <h4>1 - EMPRESA.</h4>
                </li>
                <h5>ACESSO : </h5>
                <p>Consta com </p>
                <li>2 - PRODUTOS.</li>
                <li>3 - SERVIÇOS.</li>
              </ul>
            </p>
          </ContainerTexto>
        </ContainerCard>
      </ContainerHome>
    </ContainerMain>
  )
}
