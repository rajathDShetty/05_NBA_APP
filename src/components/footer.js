import { Link } from 'react-router-dom';
import   '../css/footer.css';
import { CURRENT_YEAR } from '../config';



const Footer  = ()=>{
    
    return(
            <footer className="footer">
                    <Link to="/" className='logo'>
                        <img alt="nba logo" src="/images/nba_logo.png"/>
                    </Link>
                    <div className='right'>
                        @NBA {CURRENT_YEAR} All rights reserved.
                    </div>
            </footer>
    )
}

export default Footer;