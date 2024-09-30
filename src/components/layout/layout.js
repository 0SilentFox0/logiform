import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "../App/App.module.css";


export default function Layout({ children }) {
	return (
		<>
			<div className={styles.headerWrapper}>
				<Header />
			</div>
			<main>{children}</main>
			<Footer />

		</>
	);
}
