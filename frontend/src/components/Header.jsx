import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <div className="header">
                <div className="logo">
                <Link to='/'>Support Desk</Link>
                </div>
                <ul>    
                    <li>
                        <Link to='/login'>
                            <FaSignInAlt /> Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <FaUser /> Register
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header