import React from 'react'
import { WrapperPages } from './Home/styleHome'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes'

export default function Pages() {
  return (
    <WrapperPages>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </WrapperPages>
  )
}
