import React from 'react'
import { Link } from 'react-router-dom'
import { routeList } from '../../../routes/routeList'
import {
  BarContainer,
  BarFlex,
  BarColLeft,
  BarColRight,
  ContainerItemLink,
  CallContainerFooter
} from './staylesFooter'
import { NetworkSocialBar } from './NetworkSocialBar'

export function FootersBar() {
  // const { color } = props
  return (
    <BarContainer color="#999b9b">
      <BarFlex>
        <BarColLeft>
          <ContainerItemLink>
            {routeList.map(route => {
              const { id, label, path } = route
              return (
                <div key={id}>
                  <Link to={path} key={`link-${id}`}>
                    {label}
                  </Link>
                </div>
              )
            })}
          </ContainerItemLink>
        </BarColLeft>
        <BarColRight>
          <NetworkSocialBar />
        </BarColRight>
        <CallContainerFooter>
          <h1>box-link footer</h1>
        </CallContainerFooter>
      </BarFlex>
    </BarContainer>
  )
}
