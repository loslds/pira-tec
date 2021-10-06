import React from 'react'

import {
  ContainerMainPage,
  ContainerFlexPage,
  ContainerCardPage,
  ContainerTextPage
} from '../../styles/styles'
import TitlePage from '../layouts/LayoutTitlePage'

export const PageHome = () => {
  return (
    <ContainerMainPage>
      <ContainerFlexPage>
        <ContainerCardPage>
          <TitlePage title={'Bem Vindo'} />
          <ContainerTextPage>
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
                  <p>Contendo as seguintes opções: para ACESSO ao Sistema, </p>
                </li>
                <li>2 - PRODUTOS.</li>
                <li>3 - SERVIÇOS.</li>
              </ul>
            </p>
          </ContainerTextPage>
        </ContainerCardPage>
      </ContainerFlexPage>
    </ContainerMainPage>
  )
}
