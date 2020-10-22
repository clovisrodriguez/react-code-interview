import React from 'react'
import Header from '../Header'
import './Layout.style.css'

const Layout = ({ children }) => {
    return (
        <div className="Layout">
            <Header />
            <div className="Container">
                {children}
            </div>
        </div>
    )
}

export default Layout;
