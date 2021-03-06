import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {

  return (
    <div id="logoHenry">
        <img className="logo" src={Logo} alt="logo imagen"/>
        <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
