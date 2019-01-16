import styled from 'styled-components'
import colors from '../utils/colors'
import { RG } from './Layout'

export const StyledSelect = styled(RG.Select)`
  background-color: ${colors.darker};
  color: ${colors.light};
  border-radius: 2px;
`

export const SpriteImage = styled(RG.Image)`
  image-rendering: pixelated;
`
