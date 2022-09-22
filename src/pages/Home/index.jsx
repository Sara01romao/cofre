
import {GrDocumentText, GrHome} from 'react-icons/gr'
import { Link} from 'react-router-dom'
import './styles.css'
export function Home() {

  return (
   <div>
     <header>
       <nav>
         <ul>
           <li><Link to="/"><GrHome />Home</Link></li>
           <li><Link to="/"></Link><GrDocumentText/> Histórico</li>
         </ul>
       </nav>
       
     </header>
   </div>
  )
}


