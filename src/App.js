import Header from './Components/Header/Header'
import './App.css';
import {useState} from 'react'
import Testimonials from './Components/Testimonials/Testimonials';
import Inspiration from './Components/Inspiration/Inspiration';
import Biography from './Components/Biography/Biography';
import Footer from './Components/Footer/Footer';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/SideDrawer/Backdrop';

function App() {
  const [isOpen,setIsOpen]=useState(false)
  const HandleToggleClick=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div style={{height:'100%'}}>
    <Header HandleToggleClick={HandleToggleClick}/>
    <SideDrawer show={isOpen} />
    
    <Testimonials/>
    <Inspiration/>
    <Biography/>
    <Footer/>
    </div>
  );
}

export default App;
