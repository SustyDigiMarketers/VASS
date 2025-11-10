import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1740&auto=format&fit=crop" 
                    alt="Healthcare Technology"
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-white opacity-60"></div>
            </div>
            <div className="relative z-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="block">Empowering Healthcare through</span>
                    <span className="block text-primary">Intelligent Software Solutions</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-xl text-gray-700 sm:max-w-3xl">
                    We build data-driven healthcare systems that enhance patient care, streamline hospital operations, and power next-generation medical decision-making.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                        to="/services"
                        className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition-transform hover:scale-105"
                    >
                        Explore Solutions
                    </Link>
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/10 md:py-4 md:text-lg md:px-10 transition"
                    >
                        Request Demo
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;