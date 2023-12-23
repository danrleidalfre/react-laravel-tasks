import { DefaultTheme, ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { usePersistedState } from './utils/usePersistedState.ts'
import light from './styles/themes/light.ts'
import dark from './styles/themes/dark.ts'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router.tsx'

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router toggleTheme={toggleTheme} />
      </BrowserRouter>
    </ThemeProvider>
  )
}
