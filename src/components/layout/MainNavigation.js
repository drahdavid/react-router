import style from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
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
                </ul>
            </nav>

        </header>
    )
};

export default MainNavigation;