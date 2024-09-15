import styles from "./header.module.css";
import HamburgerMenu from "./hamburgerMenu.svg";

export const NavBar = ({children}:any) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.title}>
                    <a href="/">ポートフォリオ</a>
                </div>
            </div>
            <main className={styles.main}>{children}</main>
        </>
    );
};

export default NavBar;