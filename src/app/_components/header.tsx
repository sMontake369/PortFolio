import "./header.css";
import HamburgerMenu from "./hamburgerMenu.svg";

export const NavBar = ({children}:any) => {
    return (
        <>
            <div className="header">
                <a href="/">ポートフォリオ</a>
                <h3><HamburgerMenu/></h3>
            </div>
            <main className="main">{children}</main>
        </>
    );
};

export default NavBar;