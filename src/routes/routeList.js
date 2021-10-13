import { LayoutApp } from '../pages/layouts/LayoutApp'
import { LayoutCenter } from '../pages/layouts/LayoutCenter'
/** ====== Paginas do Component MenuPage */
import { PageHome } from '../pages/Home'
import { PageContact } from '../pages/Contact'
import { PageAbout } from '../pages/About'
import { PageLogin } from '../pages/Login'

export const routeList = [
  {
    id: 4,
    label: 'Login.',
    path: '/login',
    component: PageLogin,
    layout: LayoutCenter
  },
  {
    id: 3,
    label: 'Sobre.',
    path: '/about',
    component: PageAbout,
    layout: LayoutCenter
  },
  {
    id: 2,
    label: 'Contato.',
    path: '/contact',
    component: PageContact,
    layout: LayoutCenter
  },
  {
    id: 1,
    label: 'Home.',
    path: '/',
    component: PageHome,
    layout: LayoutApp
  }
]
