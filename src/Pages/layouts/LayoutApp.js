import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainerApp } from './stylesLayouts'
import { NavbarHome } from '../components/NavbarHome'
import { FootersBar } from '../components/FootersBar'

export const LayoutApp = ({ children }) => {
  return (
    <LayoutContainerApp>
      <NavbarHome />
      {children}
      <FootersBar />
    </LayoutContainerApp>
  )
}

LayoutApp.propTypes = {
  children: PropTypes.any
}
LayoutApp.defaultProps = {
  children: null
}
