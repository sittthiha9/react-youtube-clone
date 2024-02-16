import { StyledBody } from './Body.styles'
import { useAppContext } from '../../context/App.context'
import Menu from '../menu/Menu';

const Body = () => {
  const {isMenuSmall} = useAppContext();

  return (
    <StyledBody $isMenuSmall={isMenuSmall}>
      <Menu />
    </StyledBody>
  )
}

export default Body