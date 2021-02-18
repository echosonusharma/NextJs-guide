import LayoutStyle from "../styles/layout.module.css";
import Header from "./Header";
import Nav from "./Nav";


const Layout = ({ children }) => {

    return (
        <>
            <Nav />
            <div className={LayoutStyle.container}>
                <main className={LayoutStyle.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
};

export default Layout;
