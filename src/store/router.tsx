import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../components/Header';
import { CreateLogin } from '../pages/CreateLogin';

import {Home} from '../pages/Home'
import Login from '../pages/Login';
import NoFound from '../pages/notFound';



const Rotas = () =>{
    return(
        <BrowserRouter>
           <Header/>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path='/createLogin' element={<CreateLogin/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path='*' element={<NoFound/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default Rotas;