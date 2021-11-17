import React from 'react'
import PropTypes from 'prop-types'
import { LayoutFooterPage } from '../../layouts/stylesLayouts'

export const LayoutFooter = ({ children }) => {
  return <LayoutFooterPage>{children}</LayoutFooterPage>
}

LayoutFooter.propTypes = {
  children: PropTypes.any
}
