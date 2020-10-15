import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './style.css'

import Layout from "./layout";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/aboutUs";
import ProductsPage from './pages/products'


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path='/products'>
            <ProductsPage />
          </Route>
          
          <Route path='/about'>
            <AboutUs />
          </Route>

        
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
