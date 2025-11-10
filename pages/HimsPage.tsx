import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { 
    UserFocusIcon, 
    DownloadCloudIcon, 
    DiamondIcon,
    PatientIcon,
    CybersecurityIcon,
    ReportIcon
} from '../components/IconComponents';

const HimsPage: React.FC = () => {
    const features = [
        {
            icon: PatientIcon,
            title: 'Patient Management',
            description: 'Streamline patient registration, records (EMR/EHR), and appointments with an intuitive and centralized system.'
        },
        {
            icon: CybersecurityIcon,
            title: 'Fully Secured & Compliant',
            description: 'Ensure patient data confidentiality and compliance with global standards like ICD10 and HL7.'
        },
        {
            icon: ReportIcon,
            title: 'Integrated Modules',
            description: 'Generate customizable reports from integrated modules like billing, pharmacy, and diagnostics.'
        }
    ];

    const howItWorksSteps = [
        {
            icon: UserFocusIcon,
            title: '1. Consultation & Setup',
            description: 'We work with you to customize the HIMS platform to fit your hospital\'s unique workflow and needs.'
        },
        {
            icon: DownloadCloudIcon,
            title: '2. Data Migration & Training',
            description: 'Our team securely migrates your existing data and provides comprehensive training for your staff.'
        },
        {
            icon: DiamondIcon,
            title: '3. Go Live & Support',
            description: 'We provide ongoing support to ensure a smooth transition and continuous, optimal performance.'
        }
    ];

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-white pt-24">
                <div className="absolute top-0 right-0 -z-10 transform -translate-y-1/3 translate-x-1/4">
                    <div className="w-[80rem] h-[80rem] bg-primary/10 rounded-full" />
                </div>
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-extrabold tracking-tight text-dark sm:text-5xl md:text-6xl">
                                VASS HIMS Suite
                            </h1>
                            <p className="mt-6 text-lg text-gray-600">
                                A complete hospital management system integrating EMR, EHR, billing, pharmacy, and patient care modules to enhance operational efficiency and patient outcomes.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link to="/contact" className="w-full sm:w-auto px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark transition-transform hover:scale-105">
                                    Request Demo
                                </Link>
                                <Link to="/services" className="w-full sm:w-auto px-8 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                             <img 
                                src="https://i.imgur.com/3Y1Z7Al.png"
                                alt="HIMS on Tablet"
                                className="max-w-sm md:max-w-md lg:max-w-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold text-primary">1M+</p>
                            <p className="text-gray-600">Patient Records Managed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary">50+</p>
                            <p className="text-gray-600">Hospitals Automated</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary">100%</p>
                            <p className="text-gray-600">Compliance</p>
                        </div>
                         <div>
                            <p className="text-4xl font-bold text-primary">24/7</p>
                            <p className="text-gray-600">Technical Support</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Features Section */}
            <section className="py-20 bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        subtitle="Key Modules"
                        title="Comprehensive HIMS Features"
                        description="VASS HIMS is a modular system designed to cover all aspects of hospital management."
                    />
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
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
                            )
                        })}
                    </div>
                </div>
            </section>

             {/* How it Works Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center">
                            <img src="https://i.imgur.com/K3y2D4f.png" alt="HIMS App on Phone" className="max-h-[500px]" />
                        </div>
                        <div>
                            <SectionTitle
                                subtitle="Implementation Process"
                                title="How We Deploy Our HIMS Platform"
                            />
                            <div className="mt-8 space-y-8 relative">
                                <div className="absolute left-6 top-6 h-full border-l-2 border-dashed border-gray-300"></div>
                                {howItWorksSteps.map((step, index) => {
                                    const Icon = step.icon;
                                    return (
                                        <div key={index} className="flex items-start space-x-4 z-10">
                                            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                                                 <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-dark">{step.title}</h3>
                                                <p className="text-gray-600">{step.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Management Section */}
            <section className="py-20 bg-light">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                         <div className="order-2 lg:order-1">
                             <SectionTitle
                                subtitle="Data Management"
                                title="Centralized Control Over Hospital Data"
                            />
                            <p className="mt-4 text-gray-600">
                                Our HIMS provides a centralized dashboard to monitor all critical hospital metrics in real-time. Track patient flow, bed occupancy, billing cycles, and staff performance from a single, easy-to-use interface. Make data-driven decisions to improve patient care and operational efficiency.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <img src="https://i.imgur.com/uR7Yj2D.png" alt="HIMS Dashboard" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HimsPage;