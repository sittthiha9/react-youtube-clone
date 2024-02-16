import { useAppContext } from '../../context/App.context';
import { MENU_LARGE, MENU_SMALL } from '../../utils/SideMenu';
import { Text } from '../../utils/Text.styles';
import { ITranslations } from '../../utils/translations';
import { LargeMenuSection, MenuItem, StyledMenu } from './Menu.styles';

const Menu = () => {
  const { isMenuSmall, text } = useAppContext();

  if (isMenuSmall) {
    return (
      <StyledMenu>
        {MENU_SMALL.map(({ name, icon }, index) => (
          <MenuItem key={index} className='small'>
            {icon}
            <Text>{text[name as keyof ITranslations]}</Text>
          </MenuItem>
        ))}
      </StyledMenu>
    )
  } else {
    return (
      <StyledMenu>
        {MENU_LARGE.map(({ title, list }, index) => (
          <LargeMenuSection key={index}>
            {list.map(({ name, icon }, index) => (
              <MenuItem key={index} className='large'>
                {icon}
                <Text>{text[name as keyof ITranslations]}</Text>
              </MenuItem>
            ))}
          </LargeMenuSection>))}
      </StyledMenu>
    )
  }
}

export default Menu