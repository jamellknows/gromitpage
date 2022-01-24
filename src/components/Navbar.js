import "./styles/Navbar.css";
import navlogo from './images/gromitNav.png';
import React,{ useState } from 'react';


export default function Navbar()
{
    const [show, setShow] = useState(false);

    function toggle(){
        if(!show)
        {
            setShow(true);
        }else{
            setShow(false);
        }
    }
    return(
        <nav className="navbar">
            <img className ="nav-img" src={navlogo} alt='nav-logo' onClick={toggle}/>
            <ul className = "nav-menu" style={{display : show?'flex':'none'}}>
                <li className ="nav-menu-element"><a className="nav-element-link">Home</a></li>
                <li className ="nav-menu-element"><a className="nav-element-link">WhitePaper</a></li>
                <li className ="nav-menu-element"><a className="nav-element-link">Metabator</a></li>
              
            </ul>
        </nav>
    )
}
