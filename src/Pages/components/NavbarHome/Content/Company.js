import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to="/login">Sobre o Sistema.</Link>
      </li>
      <li>
        <span className="radar" />
        <Link to="/login">Versão.</Link>
      </li>
    </ul>
  </CompanyWrapper>
)
