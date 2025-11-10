import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, FOOTER_ONLY_LINKS } from '../constants';
import { LogoIcon, LinkedInIcon, XIcon as TwitterIcon, InstagramIcon } from './IconComponents';

const Footer: React.FC = () => {
    const companyLinks = [
        { name: 'HIMS', path: '/products/hims' },
        { name: 'HRMS', path: '/products/hrms' },
        ...FOOTER_ONLY_LINKS,
    ];

    const quickLinks = [
        ...NAV_LINKS.slice(0, 3), // Home, About, Services
        NAV_LINKS.find(link => link.name === 'Contact')
    ].filter(Boolean) as typeof NAV_LINKS;


    return (
        <footer className="bg-light border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2">
                            <LogoIcon className="h-10 w-10 text-primary" />
                             <div>
                                <span className="block text-lg font-bold text-dark leading-tight">VASS Software</span>
                                <span className="block text-xs text-gray-500 leading-tight">and Solutions Pvt. Ltd.</span>
                            </div>
                        </Link>
                        <p className="mt-4 text-sm text-gray-600">
                            Transforming healthcare with data-driven, intelligent software solutions.
                        </p>
                         <div className="mt-6 flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-primary"><LinkedInIcon className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-500 hover:text-primary"><TwitterIcon className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-500 hover:text-primary"><InstagramIcon className="h-6 w-6" /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-dark tracking-wider uppercase">Quick Links</h3>
                        <ul className="mt-4 space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-base text-gray-600 hover:text-primary">
                                        {link.name}
                                    {/* Fix: Changed closing tag from A to Link to match opening tag. */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-dark tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                             {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-base text-gray-600 hover:text-primary">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-dark tracking-wider uppercase">Contact</h3>
                        <div className="mt-4 space-y-4 text-base text-gray-600">
                             <p>I Floor, No. 15/7, 6th Cross Street,<br/>Trustpuram, Kodambakkam, Chennai, Tamil Nadu – 600024, India.</p>
                             <p>📞 +91 98765 43210</p>
                             <p>✉️ info@vasssoftwares.com</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-wrap justify-center sm:justify-between items-center gap-x-4 gap-y-2">
                    <p className="text-base text-gray-600 text-center sm:text-left">
                        &copy; {new Date().getFullYear()} VASS Software and Solutions Pvt. Ltd. All Rights Reserved.
                    </p>
                    <p className="text-base text-gray-600 text-center sm:text-right">
                        Powered with Growth by SustyDigi Marketers
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;