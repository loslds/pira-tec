import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LayoutContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
`

export const LayoutCenter = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>
}

LayoutCenter.propTypes = {
  children: PropTypes.any
}
LayoutCenter.defaultProps = {
  children: null
}
