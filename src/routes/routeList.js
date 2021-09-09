import { LayoutCenter } from '../Pages/layouts/LayoutCenter'
import { LayoutApp } from '../Pages/layouts/LayoutApp'
/** ====== Paginas do Component MenuPage */

import { PageHome } from '../Pages/Home'
import { PageLogin } from '../Pages/Login'

export const routeList = [
  {
    exact: true,
    label: 'PageHome',
    path: '/',
    component: PageHome,
    layout: LayoutApp
  },
  {
    exact: true,
    label: 'login',
    path: '/login',
    component: PageLogin,
    layout: LayoutCenter
  }
]
