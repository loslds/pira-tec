import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { routeList, routeListOptionCompany } from '../routes/routeList'

function RouteWithSubRoutes(route) {
  const logged = true

  function BuildRoute(p) {
    const { component: Component, layout: Layout, privated } = p

    if (!logged && privated) return <Redirect to="/login" />

    return (
      <Layout>
        <Component {...p} />
      </Layout>
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

export function MainRouter() {
  const routes = [...routeListOptionCompany, ...routeList]

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => {
          console.log(route)
          const key = `route-${route.path}`
          return <RouteWithSubRoutes key={key} {...route} />
        })}
      </Switch>
    </BrowserRouter>
  )
}
