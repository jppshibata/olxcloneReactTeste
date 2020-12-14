import React from 'react';
import { HeaderArea } from './styled';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpg';

const Header = () => {
    return (
        <HeaderArea>
            <div className='container'>
                <div className="logo">
                    <Link to="/">
                        <img className= "image-logo" src={logo}/>
                    </Link>
                </div>
                <nav>
                    <ul>
                    <li>
                    <Link to="">Login</Link>
                    </li>
                    <li>
                        <Link to="">Registrar</Link>
                    </li>
                    <li>
                        <Link to="" className="button">Ads um Anúncio</Link>
                    </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;