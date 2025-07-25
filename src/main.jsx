import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header/Header'
import Team from './Team/Team'
import Event from './Event/Event'
import Footer from './Footer/Footer'
import MainServuce from './Services/MainServuce'
import MainCourse from './Cources/MainCourse'
import Practice from './Practice'


createRoot(document.getElementById('root')).render(
  <StrictMode>  
      <Header></Header>
    <MainServuce></MainServuce>
    <MainCourse></MainCourse>
    <Team></Team>
    <Event></Event>
    <Footer></Footer>
   
  </StrictMode>
)
