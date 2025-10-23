// import FontAwesome from 'react-fontawesome';
import * as icons from 'react-bootstrap-icons';
import   '../css/header.css';

import SideNav from './SideNav/sideNav';


const Header  = (props)=>{

    const navBars = () => (
        <div >
            <icons.BorderWidth className="bars" 
                onClick={() => { props.onOpenNav()}}
            />
        </div>
    )

    const logo =() => {
        return(
                    <a href="/" className="logo">
                        <img alt="nba logo" src="/images/nba_logo.png"/>
                    </a>
        )
    }
    
    return(
            <header className="header">
                <SideNav {...props}/>
                <div className='headerOpt'>
                    {navBars()}
                    {logo()}
                </div>
            </header>
    )
}

export default Header;