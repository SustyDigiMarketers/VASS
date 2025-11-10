import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { 
    CheckCircleIcon,
    RocketLaunchIcon,
    CloudIcon,
    UserFocusIcon,
    ReportIcon,
    StarIcon
} from '../components/IconComponents';
import StatsCounter from '../components/StatsCounter';

const AboutPage: React.FC = () => {

    const milestones = [
        { year: '2011', description: 'VASS Software and Solutions was founded in Chennai with a vision to revolutionize healthcare IT.', icon: RocketLaunchIcon },
        { year: '2013', description: 'Launched the first version of our flagship HIMS product, automating key hospital operations.', icon: CheckCircleIcon },
        { year: '2016', description: 'Expanded our services to include Big Data & Analytics, helping hospitals leverage data for better outcomes.', icon: CloudIcon },
        { year: '2019', description: 'Achieved a major milestone by partnering with over 25 hospitals across South India.', icon: UserFocusIcon },
        { year: '2022', description: 'Introduced the VASS HealthAnalytics suite, a powerful tool for data-driven decision-making.', icon: ReportIcon },
        { year: '2024', description: 'Recognized as a leading Healthcare IT solutions provider, continuing to innovate and grow.', icon: StarIcon },
    ];

    return (
        <div className="bg-white pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-cyan-400 to-primary text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                                About VASS Software and Solutions
                            </h1>
                            <p className="mt-6 text-lg text-indigo-100">
                                Founded in 2011, VASS Software and Solutions Pvt. Ltd. is a privately held IT company based in Chennai, Tamil Nadu. We specialize in developing Healthcare Information Management Systems (HIMS), Big Data, and Analytics platforms designed to meet global standards.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img 
                                src="https://images.unsplash.com/photo-1551601651-2a8555f1a13e?q=80&w=1740&auto=format&fit=crop" 
                                alt="Medical Technology" 
                                className="rounded-lg shadow-2xl w-full max-w-sm"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-dark">Our Mission</h2>
                            <p className="mt-4 text-gray-600 text-lg">To empower healthcare organizations through innovative digital solutions that enhance patient outcomes and operational excellence.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-dark">Our Vision</h2>
                            <p className="mt-4 text-gray-600 text-lg">To become a global leader in intelligent healthcare information systems.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="VASS by the Numbers"
                        description="Our journey is marked by growth, innovation, and a commitment to our clients' success."
                    />
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatsCounter value={new Date().getFullYear() - 2011} label="Years in Business" />
                        <StatsCounter value={50} label="Hospitals Served" />
                        <StatsCounter value={300} label="Projects Delivered" />
                        <StatsCounter value={40} label="Dedicated Experts" />
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-20 bg-light">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1740&auto=format&fit=crop" alt="Strategic planning" className="rounded-lg shadow-md" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-dark">Our Approach</h2>
                            <p className="mt-4 text-gray-600">Our approach is consultative, our execution is strategic, and our processes are agile — enabling us to deliver sophisticated, scalable, and cost-effective IT solutions.</p>
                            <ul className="mt-6 space-y-4">
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-secondary flex-shrink-0 mr-3 mt-1" />
                                    <span>Consultative strategy to understand unique client needs.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-secondary flex-shrink-0 mr-3 mt-1" />
                                    <span>Agile development for flexible and rapid deployment.</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-6 w-6 text-secondary flex-shrink-0 mr-3 mt-1" />
                                    <span>Focus on scalable architecture for long-term growth.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Our Journey & Milestones"
                        description="Tracing our path from a promising startup to a leader in healthcare technology."
                    />
                    <div className="relative mt-20">
                        <div className="absolute top-0 left-6 w-0.5 h-full bg-gray-200 lg:left-1/2 lg:-translate-x-1/2"></div>
                        
                        <div className="space-y-16">
                            {milestones.map((milestone, index) => {
                                const isEven = index % 2 === 0;
                                const Icon = milestone.icon;

                                return (
                                    <div key={index} className={`relative lg:flex items-center w-full ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                        
                                        {/* Spacer for Desktop */}
                                        <div className="hidden lg:block lg:w-5/12"></div>

                                        {/* Icon on the timeline */}
                                        <div className="absolute top-0 -translate-y-1/2 left-6 -translate-x-1/2 lg:relative lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0 z-10">
                                            <div className="flex items-center justify-center bg-primary text-white shadow-xl w-12 h-12 rounded-full ring-8 ring-white">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                        </div>

                                        {/* Content Card */}
                                        <div className={`ml-16 lg:ml-0 w-full lg:w-5/12 ${!isEven ? 'lg:pr-12' : 'lg:pl-12'}`}>
                                            <div className={`p-6 bg-white rounded-lg shadow-lg border border-gray-100 transition-transform hover:scale-105 ${!isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                                                <p className="mb-2 font-bold text-primary text-2xl">{milestone.year}</p>
                                                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                                            </div>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Company Info Section */}
            <section className="py-20 bg-light">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionTitle title="Company Information" />
                    <div className="mt-8 bg-white p-8 rounded-lg shadow-lg border border-gray-100 max-w-3xl mx-auto">
                        <p className="text-gray-700">
                            VASS Software and Solutions Pvt. Ltd. was incorporated on May 12, 2011, under the Registrar of Companies, Chennai. The company is currently active and privately held, with 11-50 employees dedicated to the Healthcare IT sector.
                        </p>
                        <div className="mt-6">
                            <h3 className="font-semibold text-dark">Our Office</h3>
                             <p className="text-gray-600 mt-2">
                                I Floor, No. 15/7, 6th Cross Street,
                                <br/>
                                Trustpuram, Kodambakkam, Chennai, Tamil Nadu – 600024, India.
                            </p>
                        </div>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;