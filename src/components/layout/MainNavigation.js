import style from './MainNavigation.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../store/auth.context';
const MainNavigation = () => {

    const authCtx = useContext(AuthContext);
    const history = useHistory(); 

    const handleLogout = (e) => {
        authCtx.logout();
        history.replace('/login');
    }

    return (
        <header className={style.header}>
            <div className={style.logo}>  Great Quotes </div>
            <nav className={style.nav}>
                <ul>
                    <li>
                        <NavLink activeClassName={style.active} to='/quotes'>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={style.active} to='/new-quote'>
                            New Quote
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogout} className='ui youtube button'>
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>

        </header>
    )
};

export default MainNavigation;