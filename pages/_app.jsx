import "./styles/style.css";
import { useEffect } from "react";
import './styles/global.css';
import './styles/responsive.css';
import { useRouter } from "next/router"; // Import useRouter
import Navbars from "../components/header";
import Head from "next/head";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();

    // List of pages where the navbar should be hidden
    const shouldHideNavbar = router.pathname.startsWith('/admin');
    

    return (
        <div>
            
            {!shouldHideNavbar && <Navbars />}
            <Component {...pageProps} />
        
        </div>
    );}


    

export default MyApp;
