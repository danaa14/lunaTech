import Header from "../components/Header"
import Footer from "../components/Footer"
import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default Layout;