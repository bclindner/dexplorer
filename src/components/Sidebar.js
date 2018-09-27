import styled from 'styled-components'

const Sidebar = {}

Sidebar.Container = styled.aside`
  background-color: #1d1f21;
  width: 100%;
  height: 100%;
`

Sidebar.SearchBar = styled.input`
  padding: 1em;
  box-sizing: border-box;
  width: 100%;
  background-color: #2d2f31;
  color: #eee;
  border: none;
  border-radius: 0;
`

Sidebar.List = styled.ul`
  color: white;
  width: 100%;
  padding-left: 0;
  margin-top: 0;
  overflow-y: scroll;
  max-height: 800px;
`

Sidebar.ListItem = styled.li`
  list-style-type: none;
  padding: 1em 0 1em 1em;
  &:link {
    text-decoration: none;
  }
  &:hover {
    background-color: #2d2f31;
  }
`

export default Sidebar
