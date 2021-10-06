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
        Sobre o Sistema.
      </li>
      <li>
        <span className="radar" />
        Versão
      </li>
    </ul>
    {/* <ul className="secondary">
      <li className="title">
        <span className="title-icon" />
        Do blog
      </li>
      <li>
        Payouts with no code required
        <span className="new-tag">Novo</span>
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Introducing the Billing customer portal
        <span className="arrow">{'>'}</span>
      </li>
      <li>
        Online bank transfers through FPX are now...
        <span className="arrow">{'>'}</span>
      </li>
    </ul> */}
  </CompanyWrapper>
)
