import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'
import { routeList } from '../../../routes/routeList'
import {
  BarContainer,
  BarFlex,
  BarColLeft,
  BarColRight,
  ContainerItemLink
} from './staylesFooter'
import { NetworkSocialBar } from './NetworkSocialBar'

export function FootersBar() {
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
                    <HomeIcon fontSize="large" />
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
      </BarFlex>
    </BarContainer>
  )
}
