import React from 'react';
import {PageArea} from './styled';
import {Link} from 'react-router-dom';
import {PageContainer, PageTitle} from '../../components/maincomp';

const Page =() =>{
    return(
        <PageContainer>
        <PageTitle>Login</PageTitle>
        <PageArea>
        <form>
            <label className="area">
                <div className="area-title">
                    Email
                </div>
                <div className="area-input">
                    <input type="email" placeholder="Digite seu email"></input>
                </div>
            </label>
            <label className="area">
                <div className="area-title">
                    Senha
                </div>
                <div className="area-input">
                    <input type="password" placeholder="Digite sua senha"></input>
                </div>
                </label>
                <label className="area">
                <div className="area-title">
                    Lembrar Senha
                </div>
                <div className="area-input">
                    <input type="checkbox"></input>
                </div>
                </label>
                <label className="area">
                <div className="area-input">
                    <button>Fazer Login</button>
                    <button>Esqueceu sua senha?</button>
                </div>
                </label>
        </form>
        </PageArea>
        </PageContainer>
    )
}
export default Page;

