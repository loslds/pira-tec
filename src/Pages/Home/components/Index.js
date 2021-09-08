import React from 'react'
import GlobalStyles from '../../..styles'
import Layout from '../styleHome'
import Navbar from '../NavBar/NaveBarHome'

export const LayoutHome = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Navbar />
        {children}
      </Layout>
    </>
  )
}
