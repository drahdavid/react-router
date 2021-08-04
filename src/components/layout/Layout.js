import style from './Layout.module.css';
import { Fragment } from 'react';
import MainNavigation from './MainNavigation';
const Layout = (props) => {
    return <Fragment>
        <MainNavigation/>
            <main className={style.main}>{props.children}</main>
    </Fragment>
};

export default Layout;