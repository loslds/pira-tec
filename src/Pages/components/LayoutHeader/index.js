import React from 'react'
import PropTypes from 'prop-types'
import { LayoutHeaderPage } from '../../layouts/stylesLayouts'

export const LayoutHeader = ({ children }) => {
  return <LayoutHeaderPage>{children}</LayoutHeaderPage>
}
LayoutHeader.prototype = {
  children: PropTypes.any
}
LayoutHeader.default = {
  children: null
}
