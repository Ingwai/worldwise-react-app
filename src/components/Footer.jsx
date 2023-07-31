import styles from './Footer.module.css';
const footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.copyright}> &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
		</footer>
	);
};

export default footer;
