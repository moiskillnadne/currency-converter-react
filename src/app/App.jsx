import { AppEntryPoint } from "../pages"

import { AppQueryProvider } from "./provider/QueryProvider"
import { AppThemeProvider } from "./provider/ThemeProvider"

function App() {
  return (
    <AppThemeProvider>
      <AppQueryProvider>
        <AppEntryPoint />
      </AppQueryProvider>
    </AppThemeProvider>

  )
}

export default App
