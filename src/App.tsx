import { ThemeProvider } from "styled-components"
import { AppContainer, GlobalStyle } from "./App.styles"
import { THEMES } from "./utils/theme"
import { useAppContext } from "./context/App.context"
import Header from "./components/header/Header"
import Tooltips from "./utils/Tooltips"

const App = () => {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyle />
      <AppContainer>
        <Tooltips />
        <Header />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App