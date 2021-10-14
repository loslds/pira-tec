import React from 'react'
import PropTypes from 'prop-types'
import { CardTitle } from './stylesLayouts'

export const LayoutTitlePage = ({ title }) => {
  return (
    <CardTitle>
      <h3>{title}</h3>
    </CardTitle>
  )
}

LayoutTitlePage.propTypes = {
  title: PropTypes.string.isRequired
}
