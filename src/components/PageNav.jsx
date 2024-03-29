import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from './Logo';
import { useAuth } from '../contexts/FakeAuthContext';

const PageNav = () => {
	const { isAuthenticated } = useAuth();
	return (
		<nav className={styles.nav}>
			<Logo />
			<ul>
				<li>
					<NavLink to='/pricing'>Pricing</NavLink>
				</li>
				<li>
					<NavLink to='/product'>Product</NavLink>
				</li>
				<li>
					<NavLink to='/login' className={styles.ctaLink}>
						{`${!isAuthenticated ? 'Login' : 'Logout'}`}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default PageNav;
