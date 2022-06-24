
import UserProvider from './context/user'
import Rotas from './store/router'

export function App() {

  return (
    <UserProvider>
      <Rotas/>
    </UserProvider>
  )
}


