import React from 'react';
import { HeaderArea } from './styled';
import {Link} from 'react-router-dom';
import logo from './images/logo.jpg';
import {isLogged} from '../../../helpers/authLogin';

const Header = () => {
    let logged = isLogged();

    return (
        <HeaderArea>
            <div className='container'>
                <div className="logo">
                    <Link to="/">
                        <img className= "image-logo" src={logo}/>
                    </Link>
                </div>
                <nav className="menu-header">
                    <ul>
                    {logged &&
                    <>
                    <li>
                    <Link to="/my-account">Minha Conta</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                    <li>
                        <Link to="/post-ads" className="button">Ads um Anúncio</Link>
                    </li>
                    </>  
                    }
                    {!logged &&
                    <>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Registrar</Link>
                    </li>
                    <li>
                        <Link to="/login" className="button">Ads um Anúncio</Link>
                    </li>
                    </>
                    }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;