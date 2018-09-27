import React, { Component } from 'react'
import { RG, Wrapper } from './Layout.js'
import { BrowserRouter, Link } from 'react-router-dom'
import Sidebar from './Sidebar.js'
import Info from './Info.js'

class Main extends Component {
  render() {
    return (
    <BrowserRouter>
      <Wrapper>
        <RG.Row>
          <RG.Col span='4'>
            <Sidebar.Container>
              <Sidebar.SearchBar placeholder="Search by name..." />
              <Sidebar.List>
                <Link to='bulbasaur'>
                  <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                </Link>
              </Sidebar.List>
            </Sidebar.Container>
          </RG.Col>
          <RG.Col span='8'>
            <Info.Container>
              <RG.Row>
                <RG.Col span='3'>
                  <RG.Image src='https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/250px-384Rayquaza.png' />
                </RG.Col>
                <RG.Col span='9'>
                  <small>#394</small>
                  <h1>Rayquaza</h1>
                  <small>Flying / Dragon</small>
                  <p>Abilities: Air-Lock</p>
                  <p>Height: 1m</p>
                  <p>Weight: 200kg</p>
                </RG.Col>
              </RG.Row>
              <RG.Row>
                <RG.Col span='6'>
                  <h2>Stats</h2>
                </RG.Col>
                <RG.Col span='6'>
                  <h2>Effort Values</h2>
                </RG.Col>
              </RG.Row>
            </Info.Container>
          </RG.Col>
        </RG.Row>
      </Wrapper>
    </BrowserRouter>
    )
  }
}


export default Main
