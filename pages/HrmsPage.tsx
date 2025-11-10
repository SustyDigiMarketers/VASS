import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { RocketLaunchIcon, WebsiteOptimizationIcon, ResponsiveDesignIcon } from '../components/IconComponents';

const HrmsPage: React.FC = () => {
    const coreFeatures = [
        {
            icon: RocketLaunchIcon,
            title: 'Clinical Analytics',
            description: 'Analyze clinical data to identify trends, predict patient outcomes, and improve treatment effectiveness.'
        },
        {
            icon: WebsiteOptimizationIcon,
            title: 'Operational Insights',
            description: 'Optimize hospital operations, from bed occupancy to staff allocation, using real-time data.'
        },
        {
            icon: ResponsiveDesignIcon,
            title: 'Financial Dashboards',
            description: 'Track revenue cycles, insurance claims, and departmental profitability with our intuitive dashboards.'
        }
    ];

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-white pt-24 pb-10">
                <div className="absolute top-0 left-0 w-full h-[90%] -z-10 bg-gradient-to-br from-primary to-cyan-600" style={{ clipPath: 'ellipse(100% 75% at 50% 25%)' }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                        VASS HealthAnalytics
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-indigo-200">
                        Big Data-driven insights for healthcare management and strategic decision-making.
                    </p>
                    <div className="mt-8">
                        <Link to="/contact" className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-indigo-50 transition-transform hover:scale-105">
                            Request Demo
                        </Link>
                    </div>
                </div>
                <div className="relative -mt-24 z-10">
                    <img src="https://i.imgur.com/W2uF21G.png" alt="Analytics Dashboard on multiple devices" className="mx-auto" />
                </div>
            </section>

            {/* Core Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        subtitle="What We Provide"
                        title="The Complete Analytics Solution"
                    />
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {coreFeatures.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-lg text-center shadow-md border border-gray-100">
                                    <div className="flex justify-center items-center mb-6">
                                        <div className="bg-primary/10 p-4 rounded-full">
                                            <Icon className="h-8 w-8 text-primary" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Advanced Protection Section */}
            <section className="py-20 bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-primary font-semibold tracking-wider uppercase">Data Security</p>
                            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl mt-2">Secure & Compliant Data Processing</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Our platform is built on a secure foundation, ensuring that all sensitive patient and hospital data is encrypted and handled in compliance with healthcare regulations like HIPAA.
                            </p>
                            <Link to="/services" className="mt-8 inline-block px-8 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition">
                                Learn More
                            </Link>
                        </div>
                        <div className="flex justify-center">
                            <img src="https://i.imgur.com/gK6Tzdo.png" alt="Data Protection UI" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Complete Solution Section */}
            <section className="py-20 bg-white">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <img src="https://i.imgur.com/uR7Yj2D.png" alt="Analytics Dashboard" className="rounded-lg shadow-xl" />
                        </div>
                         <div>
                            <p className="text-primary font-semibold tracking-wider uppercase">Data Visualization</p>
                            <h2 className="text-3xl font-extrabold text-dark sm:text-4xl mt-2">The Complete Analytics Platform</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Turn raw data into clear, actionable insights with our powerful visualization tools and customizable dashboards.
                            </p>
                            <ul className="mt-6 space-y-3 text-gray-600">
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Real-time data reporting</span>
                                </li>
                                <li className="flex items-center">
                                    <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Easy to customize dashboards</span>
                                </li>
                                 <li className="flex items-center">
                                    <svg className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>24/7 Expert Support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HrmsPage;