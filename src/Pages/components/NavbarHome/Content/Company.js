import React from 'react'
import { Link } from 'react-router-dom'
// import { PageLogin } from '../../../Login'
// import { useLocation } from 'react-router-dom'
import { CompanyWrapper } from './styleContentHome'
export const Company = () => (
  <CompanyWrapper>
    <ul className="primary">
      <li>
        <span className="atlas" />
        <Link to="/login">Quem Somos.</Link>
      </li>
      <li>
        <span className="sigma" />
        <h3>Sobre o Sistema.</h3>
      </li>
      <li>
        <span className="radar" />
        <h3>Versão Sistema.</h3>
      </li>
    </ul>
  </CompanyWrapper>
)
