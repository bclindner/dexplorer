import React, { Component } from 'react'
import { RG, Wrapper } from './Layout.js'
import { BrowserRouter, Link } from 'react-router-dom'
import Sidebar from './Sidebar.js'
import StatBar from './StatBar.js'
import Info from './Info.js'
import EVCard from './EVCard.js'
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
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
                <Sidebar.ListItem>Bulbasaur</Sidebar.ListItem>
              </Sidebar.List>
            </Sidebar.Container>
          </RG.Col>
          <RG.Col span='8'>
            <Info.Container>
              <RG.Row>
                <RG.Col span='4'>
                  <RG.Image src='https://cdn.bulbagarden.net/upload/thumb/e/e4/384Rayquaza.png/250px-384Rayquaza.png' />
                </RG.Col>
                <RG.Col span='8'>
                  <Info.Card>
                    <small>#394</small>
                    <h1>Rayquaza</h1>
                    <small>Flying / Dragon</small>
                    <p>Abilities: Air-Lock</p>
                    <p>Height: 1m</p>
                    <p>Weight: 200kg</p>
                  </Info.Card>
                </RG.Col>
              </RG.Row>
              <RG.Row>
                <RG.Col span='6'>
                  <Info.Card>
                    <h2>Stats</h2>
                    <table>
                      <tbody>
                        <tr>
                          <td>HP</td>
                          <StatBar label='15' percent='2.9' color='#FF5959'/>
                        </tr>
                        <tr>
                          <td>Attack</td>
                          <StatBar label='255' percent='40' color='#F5AC78'/>
                        </tr>
                        <tr>
                          <td>Defense</td>
                          <StatBar label='255' percent='50' color='#FAE078'/>
                        </tr>
                        <tr>
                          <td>Sp.Atk.</td>
                          <StatBar label='255' percent='50' color='#9DB7F5'/>
                        </tr>
                        <tr>
                          <td>Sp.Def.</td>
                          <StatBar label='255' percent='50' color='#A7DB8D'/>
                        </tr>
                        <tr>
                          <td>Speed</td>
                          <StatBar label='255' percent='50' color='#FA92B2'/>
                        </tr>
                      </tbody>
                    </table>
                  </Info.Card>
                </RG.Col>
                <RG.Col span='6'>
                  <Info.Card>
                    <h2>Effort Values</h2>
                    <RG.Row>
                      <RG.Col span='4'>
                        <EVCard color='#FF5959'>
                          HP<br/>
                          0
                        </EVCard>
                      </RG.Col>
                      <RG.Col span='4'>
                        <EVCard color='#F5AC78'>
                          Atk<br/>
                          0
                        </EVCard>
                      </RG.Col>
                      <RG.Col span='4'>
                        <EVCard color='#FAE078'>
                          Def<br/>
                          0
                        </EVCard>
                      </RG.Col>
                    </RG.Row>
                    <RG.Row>
                      <RG.Col span='4'>
                        <EVCard color='#9DB7F5'>
                          Sp.Atk.<br/>
                          0
                        </EVCard>
                      </RG.Col>
                      <RG.Col span='4'>
                        <EVCard color='#A7DB8D'>
                          Sp.Def.<br/>
                          0
                        </EVCard>
                      </RG.Col>
                      <RG.Col span='4'>
                        <EVCard color='#FA92B2'>
                          Speed<br/>
                          0
                        </EVCard>
                      </RG.Col>
                    </RG.Row>
                  </Info.Card>
                </RG.Col>
              </RG.Row>
              <RG.Row>
                <RG.Col span='6'>
                  <Info.Card>
                    <h2>Moveset</h2>
                    <RG.Table>
                      <thead>
                        <th>Level</th>
                        <th>Move</th>
                        <th>Learned By</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Tackle</td>
                          <td>Level-Up</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Tackle</td>
                          <td>Level-Up</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Tackle</td>
                          <td>Level-Up</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Tackle</td>
                          <td>Level-Up</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Tackle</td>
                          <td>Level-Up</td>
                        </tr>
                      </tbody>
                    </RG.Table>
                  </Info.Card>
                </RG.Col>
                <RG.Col span='6'>
                  <Info.Card>
                    <h2>Other Info</h2>
                    <p>
                      <b>Egg Group</b> Undiscovered
                    </p>
                    <p>
                      <b>Catch Rate</b> 45
                    </p>
                    <p>
                      <b>Growth Rate</b> Medium-Slow
                    </p>
                    <p>
                      <b>Base Friendship</b> 0
                    </p>
                  </Info.Card>
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
