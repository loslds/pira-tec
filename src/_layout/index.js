import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Divs = styled.div`
  position: relative;
  display: block;
  width: 920px;
`
const LayoutContainer = styled(Divs)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  height: 100%;
`
// const LayoutHeader = styled(Divs)`
//   /* min-height: 58px; */
//   background-color: rgba(0, 0, 0, 0.5);
// `
export const LayoutMain = styled(Divs)`
  // border-color: 4px #ff0000 solid;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.5);
  scroll-behavior: auto;
`
// const LayoutFooter = styled(Divs)`
//   /* min-height: 50px; */
//   background-color: rgba(0, 0, 0, 0.5);
// `
export default function Layout({ children }) {
  return (
    <LayoutContainer>
      {/* <LayoutHeader>
        <AppBar color="#98b8e7" />
      </LayoutHeader> */}
      <LayoutMain color="rgba(0, 0, 0, 0.1)"> {children}</LayoutMain>
      {/* <LayoutFooter>
        <Footers color="#98b8e7" />
      </LayoutFooter> */}
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.string
}
