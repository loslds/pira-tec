import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'
import { UserPage } from '../pages/UserPage'

export const MainRouter = () => {
  return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/user" exact>
                    <UserPage />
                </Route>
                <Route path="/products" exact>
                  <ProductPage />
                </Route>
            </Switch>
        </BrowserRouter>
  )
}
