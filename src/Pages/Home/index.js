import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles'
import Layout from '../Home/styleHome'
import Navbar from '../NavBar/NaveBarHome'

export const HomePage = () => {
  return (
    <GlobalStyles />
      <Layout>
        <Navbar />
        <h1>HOME PAGE</h1>
      <p>tESTE DE CONTEUDO</p>
      </Layout>
  )
}
