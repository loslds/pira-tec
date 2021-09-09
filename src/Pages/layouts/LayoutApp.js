import React from 'react'
import { NavbarHome } from '../components/NavbarHome'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const LayoutContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  background-color: #3dc3f8d5;
`

export const LayoutApp = ({ children }) => {
  return (
    <LayoutContainer>
      <NavbarHome />
      {children}
    </LayoutContainer>
  )
}

LayoutApp.propTypes = {
  children: PropTypes.any
}
LayoutApp.defaultProps = {
  children: null
}
