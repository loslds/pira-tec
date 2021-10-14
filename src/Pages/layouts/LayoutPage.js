import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainerPage } from './stylesLayouts'
import { LayoutHeaderPage } from './LayoutHeaderPage'
import { LayoutMainPage } from './LayoutMainPage'
import { LayoutFooterPage } from './LayoutFooterPage'

export const LayoutPg = ({ children }) => {
  return (
    <LayoutContainerPage>
      <LayoutHeaderPage />
      <LayoutMainPage color="rgba(0, 0, 0, 0.1)"> {children}</LayoutMainPage>
      <LayoutFooterPage />
    </LayoutContainerPage>
  )
}

LayoutPg.propTypes = {
  children: PropTypes.string
}
