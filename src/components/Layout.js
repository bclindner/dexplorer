import styled, { injectGlobal } from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Object containing Flexbox responsive grid components.
 */
export const RG = {}

/**
 * Wrapper which controls height and width of the app,
 * and applies some rudimentary styles.
 */
export const Wrapper = styled.div`
  font-family: sans-serif;
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  min-width: 800px;
  max-height: 1080px;
  height: 800px;
  @media only screen and (max-width: 800px) {
    width: 100%;
    min-width: auto;
  }

`

/**
 * Injected body styles that fix some default weirdness. Also applies a background color.
 */
export const BodyStyles = injectGlobal`
  body {
    margin: 0 auto;
    width: 100%;
    background-color: #111314;
  }
`

/**
 * A Flexbox responsive 'row'.
 * Not necessarily a single row, but does force a line break between rows.
 */
RG.Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media only screen and (max-width: 800px) {
    flex-flow: column nowrap;
  }
`

/**
 * A Flexbox 'row'. Non-responsive.
 */
RG.StaticRow = styled.div`
  display: flex;
  flex-flow: nowrap;
`

/**
 * Helper component for displaying horizontally and vertically centered elements inside of a div.
 */
RG.Centered = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

/**
 * A Flexbox responsive 'column'.
 * Width can be controlled with the span attribute, 12-column-grid style.
 * A caveat: due to the nature of Flexbox and this grid configuration, if all elements add up to less than 12 columns, it stretches their width to fit.
 */
RG.Col = styled.div`
  flex: ${props => props.span * 8.33}%;
`
RG.propTypes = {
  span: PropTypes.number.isRequired
}

/**
 * Simple responsive image.
 * Just sets the width to 100% so it fills the div it's contained in.
 */
RG.Image = styled.img`
  box-sizing: border-box;
  width: 100%;
`

/**
 * :72,74s/image/table
 * Also aligns the text left, because table header tags do that by default.
 */
RG.Table = styled.table`
  width: 100%;
  text-align: left;
`

RG.Select = styled.select`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
`
