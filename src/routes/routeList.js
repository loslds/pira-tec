import { LayoutApp } from '../pages/layouts/LayoutApp'
import { LayoutCenter } from '../pages/layouts/LayoutCenter'
/** ====== icons do link footers */
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'; /** home */
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';/** local */
// import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; /** login */
// import BlurLinearOutlinedIcon from '@mui/icons-material/BlurLinearOutlined';

/** ====== Paginas do Component MenuPage */
import { PageHome } from '../pages/Home'
import { PageContact } from '../pages/Contact'

import { PageAbout } from '../pages/About'
import { PageLogin } from '../pages/Login'

export const routeList = [
  {
    id: 4,
    img: null, /** RoomOutlinedIcon, */
    label: 'Local.',
    path: '/locate',
    component: PageLocate,
    layout: LayoutCenter
  },
  {
    id: 3,
    img: null, /** MailOutlineOutlinedIcon, */
    label: 'Email.',
    path: '/email',
    component: PageAbout,
    layout: LayoutCenter
  },
  {
    id: 2,
    img: null, /** PhoneInTalkOutlinedIcon, */
    label: 'Contato.',
    path: '/contact',
    component: PageContact,
    layout: LayoutCenter
  },
  {
    id: 1,
    img: null, /** HomeOutlinedIcon, */
    label: 'Home.',
    path: '/',
    component: PageHome,
    layout: LayoutApp
  }
]
export const routeOptionCompanyList = [
  {
    id: 1,
    img: null, /** LockOutlinedIcon,  */
    label: 'Login.',
    path: '/login',
    component: PageLogin,
    layout: LayoutCenter
  },
  {
    id: 2,
    img: null, /** BlurLinearOutlinedIcon,  */
    label: 'Sobre.',
    path: '/about',
    component: PageAbout,
    layout: LayoutCenter
  },

]