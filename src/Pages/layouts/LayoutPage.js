import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Divs = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  position: relative;
  display: block;
  width: 920px;
`
export const LayoutContainer = styled(Divs)`
  border: 3px #000000 solid;
  border-radius: 23px;
  margin: 0 auto;
  padding: 0 auto;
  width: 920px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  height: 100%;
`
export const LayoutHeader = styled(Divs)`
  border: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 0 auto;
  padding: 0 auto;
  min-height: 58px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
export const LayoutMain = styled(Divs)`
  border-top: 3px #000000 solid;
  border-bottom: 3px #000000 solid;
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  flex-grow: 1;
  background-color: rgb(166, 181, 182);
  scroll-behavior: auto;
`
export const LayoutFooter = styled(Divs)`
  border: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  min-height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
`
export const LayoutPage = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutHeader />
      <LayoutMain color="rgba(0, 0, 0, 0.1)"> {children}</LayoutMain>
      <LayoutFooter />
    </LayoutContainer>
  )
}

LayoutPage.propTypes = {
  children: PropTypes.string
}
