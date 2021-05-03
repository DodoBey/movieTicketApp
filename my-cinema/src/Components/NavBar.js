import Logo from '../Images/mainLogo.png';
import Cart from '../Images/cart.png';
import './NavBar.css';
import {useState} from 'react';

const NavBar = () => {

    const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

    return (
        <div className={colorChange ? 'navBar colorChange' : 'navBar'}>
            <div className="navBarElements">
                <div className="cinemaID">
                    <img className="mainLogo" src={Logo} alt="" />
                    <span>Cinemaximum</span>
                </div>
                <div className="cart">
                    <img className="cartImage" src={Cart} alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavBar;