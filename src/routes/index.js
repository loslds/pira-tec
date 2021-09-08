import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { routeList } from '../routes'
import LayoutHome from '../Pages/Home/components'

function RouteWithSubRoutes(route) {
  const logged = true

  function BuildRoute(p) {
    const { component: Component, layout: LayoutHome, privated } = p

    if (!logged && privated) return <Redirect to="/" />

    return (
      <LayoutHome>
        <Component {...p} />
      </LayoutHome>
    )
  }
  return (
    <Route
      exact={!!route.exact}
      path={route.path}
      render={prop => <BuildRoute {...prop} {...route} />}
    />
  )
}

export default function MainRouter() {
  const routes = [...routeList]

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => {
          const key = `route-${i}`
          return <RouteWithSubRoutes key={key} {...route} />
        })}
      </Switch>
    </BrowserRouter>
  )
}
