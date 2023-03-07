import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import nytSymbol from '../../Images/nytSymbol.png'

const Header = () => {
    return(
        <div className='header-container'>
            <div className='logo-container'>
                <Link to='/'>
                    <img className='nyt-logo' src={nytSymbol} alt='new york times symbol' />
                </Link>
            </div>
                <h1 className='header-title'>New York Times Reader</h1>
        </div>
    )
}

export default Header