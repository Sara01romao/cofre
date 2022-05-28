import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateLogin } from '../pages/CreateLogin';

import {Home} from '../pages/Home'
import NoFound from '../pages/notFound';


const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/createLogin' element={<CreateLogin/>}/>
                <Route path='*' element={<NoFound/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default Rotas;