import { Setting, StyledSetting } from './Settings.styles'
import { HiLanguage } from 'react-icons/hi2'
import { GoMoon } from 'react-icons/go'
import { Text } from '../../utils/Text.styles'
import { useAppContext } from '../../context/App.context'

const Settings = () => {
  const {theme, text, language, toggleLanguage, toggleTheme} = useAppContext();

  const settings = [
    {
      id: 1,
      label: text.language,
      icon: <HiLanguage size={23} />,
      value: text[language === "english" ? "french" : "english"],
      onclick: () => toggleLanguage(),
    },
    {
      id: 2,
      label: text.appearance,
      icon: <GoMoon size={23} />,
      value: text[theme === "dark" ? "light" : "dark" ],
      onclick: () => toggleTheme(),
    },
  ]

  return (
    <StyledSetting>
      {settings.map(({label, id, icon, value, onclick}) => 
      <Setting onClick={onclick} key={id}>
        {icon}
        <Text>{`${label} : ${value}`}</Text>
      </Setting>
      )}
    </StyledSetting>
  )
}

export default Settings