import React from 'react'
import PropTypes from 'prop-types'
import { LayoutMainPage } from '../../layouts/stylesLayouts'

export const LayoutMain = ({ children }) => {
  return <LayoutMainPage>{children}</LayoutMainPage>
}

LayoutMain.propTypes = {
  children: PropTypes.any
}
