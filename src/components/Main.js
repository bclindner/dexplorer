import React from 'react'
import { RG, Wrapper } from './Layout.js'
import { Header } from './Header.js'
import { Footer } from './Footer.js'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import PokemonSidebar from '../containers/List'
import InfoDisplay from '../containers/Info'
import { history } from '../reducers/main'
const Main = () => (
  <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
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
            <Route path='/:pokemon(a-z\-)?' component={InfoDisplay} />
          </Switch>
        </RG.Col>
      </RG.Row>
      <RG.Row>
        <RG.Col span='12'>
          <Footer />
        </RG.Col>
      </RG.Row>
    </Wrapper>
  </ConnectedRouter>
)
export default Main
