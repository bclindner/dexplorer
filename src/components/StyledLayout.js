import styled from 'styled-components'
import colors from '../utils/colors'
import { RG } from './Layout'
import dropdown from '../dropdown.png'

export const StyledSelect = styled(RG.Select)`
  background-color: ${colors.darker};
  color: ${colors.light};
  appearance: none;
  border-radius: 0;
  border: 1px solid ${colors.dark};
  background-image: url(${dropdown});
  background-size: 1em;
  background-repeat: no-repeat;
  background-position: 98% center;
  padding: 0.5em;
  box-sizing: border-box;
`

export const SpriteImage = styled(RG.Image)`
  image-rendering: pixelated;
`
