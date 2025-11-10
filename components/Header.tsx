import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import type { NavLink as NavLinkType } from '../types';
import { MenuIcon, XIcon, LogoIcon, ChevronDownIcon } from './IconComponents';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-gray-600'}`;
    
    const handleMobileDropdown = (name: string) => {
        setOpenMobileDropdown(openMobileDropdown === name ? null : name);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2">
                            <LogoIcon className="h-10 w-10 text-primary" />
                            <div>
                                <span className="block text-lg font-bold text-dark leading-tight">VASS Software</span>
                                <span className="block text-xs text-gray-500 leading-tight">and Solutions Pvt. Ltd.</span>
                            </div>
                        </Link>
                    </div>
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {NAV_LINKS.map((link: NavLinkType) => (
                                link.subLinks ? (
                                    <div key={link.name} className="relative group">
                                        <RouterNavLink
                                            to={link.path}
                                            className={({ isActive }) => `${navLinkClasses({ isActive: isActive || (!!link.subLinks && window.location.hash.startsWith(`#${link.path}`)) })} flex items-center`}
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDownIcon className="ml-1 h-4 w-4" />
                                        </RouterNavLink>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                            {link.subLinks.map(subLink => (
                                                <RouterNavLink
                                                    key={subLink.name}
                                                    to={subLink.path}
                                                    className={({isActive}) => `block px-4 py-2 text-sm ${isActive ? 'bg-gray-100 text-primary' : 'text-gray-700'} hover:bg-gray-100`}
                                                >
                                                    {subLink.name}
                                                </RouterNavLink>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <RouterNavLink
                                        key={link.name}
                                        to={link.path}
                                        className={navLinkClasses}
                                    >
                                        {link.name}
                                    </RouterNavLink>
                                )
                            ))}
                        </div>
                    </nav>
                    <div className="hidden md:block">
                       <Link to="/contact" className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark transition-transform hover:scale-105">
                            Request Demo
                        </Link>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-lg" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link: NavLinkType) => (
                           link.subLinks ? (
                               <div key={link.name}>
                                   <button 
                                       onClick={() => handleMobileDropdown(link.name)}
                                       className="w-full flex justify-between items-center py-2 px-4 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded"
                                   >
                                       <span>{link.name}</span>
                                       <ChevronDownIcon className={`h-5 w-5 transition-transform ${openMobileDropdown === link.name ? 'rotate-180' : ''}`} />
                                   </button>
                                   {openMobileDropdown === link.name && (
                                       <div className="pl-4 mt-1 space-y-1">
                                           {link.subLinks.map(subLink => (
                                               <RouterNavLink
                                                   key={subLink.name}
                                                   to={subLink.path}
                                                   className={({isActive}) => `block py-2 px-4 text-sm rounded ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                                                   onClick={() => setIsOpen(false)}
                                               >
                                                   {subLink.name}
                                               </RouterNavLink>
                                           ))}
                                       </div>
                                   )}
                               </div>
                           ) : (
                                <RouterNavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({isActive}) => `block py-2 px-4 text-sm rounded ${isActive ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </RouterNavLink>
                           )
                        ))}
                         <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark">
                            Request Demo
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;