
import UserProvider from './context/user';
import Rotas from './store/router';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {

  return (
    <UserProvider>
      <Rotas/>
      <ToastContainer autoClose={1000}/>
    </UserProvider>
  )
}


