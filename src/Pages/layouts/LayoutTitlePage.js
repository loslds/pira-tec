import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardTitle = styled.div`
  padding: 0px auto;
  margin: 0px auto;
  min-width: 85%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  min-height: 35px;
  font-size: 18px;
`
// export const LayoutCenter = ({ children }) => {
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
