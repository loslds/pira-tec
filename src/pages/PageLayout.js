import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import GlobalStyles from '../styles/GlobalStyles'

export const PageLayout = ({ children }) => {
  return (
    <>
    <GlobalStyles />
     <Layout>
       <Navbar/>
       {children}
     </Layout>
   </>
  )
}
