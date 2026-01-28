import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from '../router.jsx';
import Header from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';

function MainLayout() {
    const contentRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [location.pathname]);

    return (
        <div className="MainLayout">
            <Sidebar />
            <div className="main-section">
                <Header />
                <div className="page-content" ref={contentRef}>
                    <AppRoutes />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;