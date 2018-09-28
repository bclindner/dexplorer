import React from 'react'
import { RG, Wrapper } from './Layout.js'
import { Header } from './Header.js'
import { Footer } from './Footer.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PokemonSidebar } from './Sidebar.js'
import { TestComponent } from './Info.js'
const Main = () => (
  <BrowserRouter>
    <Wrapper>
      <RG.Row>
        <RG.Col span='12'>
          <Header />
        </RG.Col>
      </RG.Row>
      <RG.Row>
        <RG.Col span='4'>
          <PokemonSidebar />
        </RG.Col>
        <RG.Col span='8'>
          <Switch>
            <Route path='/:speciesName' component={TestComponent} />
          </Switch>
        </RG.Col>
      </RG.Row>
      <RG.Row>
        <RG.Col span='12'>
          <Footer />
        </RG.Col>
      </RG.Row>
    </Wrapper>
  </BrowserRouter>
)
export default Main
