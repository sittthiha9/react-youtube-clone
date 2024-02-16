import { ThemeProvider } from "styled-components"
import { AppContainer, GlobalStyle } from "./App.styles"
import { THEMES } from "./utils/theme"
import { useAppContext } from "./context/App.context"
import Header from "./components/header/Header"
import Tooltips from "./utils/Tooltips"
import Body from "./components/body/Body"

const App = () => {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <Tooltips />
      <AppContainer>
        <Header />
        <Body />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App