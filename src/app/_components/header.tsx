import "./header.css";
import HamburgerMenu from "./hamburgerMenu.svg";

export const NavBar = ({children}:any) => {
    return (
        <>
            <div className="header">
                <div className="title">
                    <a href="/">ポートフォリオ</a>
                </div>
            </div>
            <main className="main">{children}</main>
        </>
    );
};

export default NavBar;