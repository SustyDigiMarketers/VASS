import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import HimsPage from './pages/HimsPage';
import HrmsPage from './pages/HrmsPage';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="flex flex-col min-h-screen bg-white">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/products/hims" element={<HimsPage />} />
                        <Route path="/products/hrms" element={<HrmsPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
                <ChatWidget />
            </div>
        </HashRouter>
    );
};

export default App;