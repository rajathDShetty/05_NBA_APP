import FontAwesome from 'react-fontawesome';
// import * as icons from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import   '../css/header.css';

import SideNav from './SideNav/sideNav';


const Header  = (props)=>{

    const navBars = () => (
        <div >
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer'
                }}
            />
            {/* <icons.BorderWidth className="bars" 
                onClick={() => { props.onOpenNav()}}
            /> */}
        </div>
    )

    const logo =() => {
        return(
                    <Link to="/" className="logo">
                        <img alt="nba logo" src="/images/nba_logo.png"/>
                    </Link>
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