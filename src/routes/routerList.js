import Layout from '../Pages/Home/components/Index'

/** ====== Paginas do Component MenuPage */
import PageHome from '../Pages/Home'

export const rootHome = [
  {exact: true,label: 'PageHome', path: '../Pages/Home/PageHome', component: PageHome, layout: Layout
  },
      exact: true,
    label: 'Home',
    path: '../PagesHome/PageLayaut',
    component: PageHome,
    layout: Layout
  }
]

export const routerList = [...rootHome]
