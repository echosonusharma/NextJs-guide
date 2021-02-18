import LayoutStyle from "../styles/layout.module.css";
import Header from "./Header";
import Meta from "./Meta";
import Nav from "./Nav";


const Layout = ({ children }) => {

    return (
        <>
            <Meta />
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
