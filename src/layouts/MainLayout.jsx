import AppRoutes from '../router.jsx';
import Header from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar';
import '../styles/Layout.css';

function MainLayout() {
    return (
        <div className="MainLayout">
            <Sidebar />
            <div className="main-section">
                <Header />
                <div className="page-content">
                    <AppRoutes />
                </div>
            </div>
        </div>
    );
}

export default MainLayout;