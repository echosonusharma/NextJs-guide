import Link from 'next/link';
import NavStyles from '../styles/nav.module.css';

const Nav = () => {

    return (
        <nav className={NavStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;