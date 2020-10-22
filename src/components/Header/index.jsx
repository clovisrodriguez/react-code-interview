import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logo.png';
import { getQueryParam } from '../../utils/globalActions';
import './Header.style.css'

const Header = () => {
    const { location: { search } } = useSelector(state => state.router);
    const [user, setUser] = useState('Not User Selected');
    useEffect(() => {
        // eslint-disable-next-line no-restricted-globals
        setUser(decodeURI(getQueryParam('name', location)) || 'Not User Selected');
    }, [search])
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-user">{user}</p>
        </header>
    )
}

export default Header;
