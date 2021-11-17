import { LayoutApp } from '../pages/layouts/LayoutApp'
import { LayoutCenter } from '../pages/layouts/LayoutCenter'

/** ====== icons do link footers */
/** import semimg from '../assets/image/semimg.svg' */

import Home from '@material-ui/icons/Home'
import Phone from '@material-ui/icons/Phone'
import Mail from '@material-ui/icons/Mail'
import Room from '@material-ui/icons/Room'
import Build from '@material-ui/icons/Build'
import Business from '@material-ui/icons/Business'

/** ====== Paginas do Component MenuPage */
import { PageHome } from '../pages/Home'
import { PageContact } from '../pages/Contact'
import { PageLocate } from '../pages/Locate'
import { PageEmail } from '../pages/Email'
import { PageAbout } from '../pages/About'
import { PageLogin } from '../pages/Login'

export const routeList = [
  {
    id: 4,
    img: Room,
    label: 'Local.',
    path: '/locate',
    exact: true,
    component: PageLocate,
    layout: LayoutCenter
  },
  {
    id: 3,
    img: Mail,
    label: 'Email.',
    path: '/email',
    exact: true,
    component: PageEmail,
    layout: LayoutCenter
  },
  {
    id: 2,
    img: Phone,
    label: 'Contato.',
    path: '/contact',
    exact: true,
    component: PageContact,
    layout: LayoutCenter
  },
  {
    id: 1,
    img: Home,
    label: 'Home.',
    path: '/',
    exact: true,
    component: PageHome,
    layout: LayoutApp
  }
]

export const routeListOptionCompany = [
  {
    id: 1,
    img: Build,
    label: 'Login.',
    path: '/login',
    exact: true,
    component: PageLogin,
    layout: LayoutCenter
  },
  {
    id: 2,
    img: Business,
    label: 'Sobre.',
    path: '/about',
    exact: true,
    component: PageAbout,
    layout: LayoutCenter
  }
]
