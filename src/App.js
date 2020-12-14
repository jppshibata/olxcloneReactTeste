import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {Template} from './components/maincomp';
import Header from './components/partials/header';
import Footer from './components/partials/footer'; 
import Routes from './routes';
import './App.css';


const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <Header/>
        <Routes />
        <Footer/>
      </Template>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);