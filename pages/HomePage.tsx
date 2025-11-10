import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import StatsCounter from '../components/StatsCounter';
import SectionTitle from '../components/SectionTitle';
import { SERVICES, CLIENT_LOGOS } from '../constants';
import { Link } from 'react-router-dom';
import { LightbulbIcon, UserFocusIcon, FlexibleIcon } from '../components/IconComponents';

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />

            {/* About Snapshot */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                        VASS Software and Solutions Pvt. Ltd. is a Chennai-based technology company offering global-standard Healthcare Information Management Systems (HIMS) and IT consulting solutions.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        subtitle="What We Offer"
                        title="Core Healthcare IT Solutions"
                        description="We provide a specialized range of IT services designed to help healthcare organizations innovate and succeed in the digital age."
                    />
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {SERVICES.slice(0, 4).map((service) => (
                            <ServiceCard key={service.name} service={service} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatsCounter value={250} label="HIMS Modules Deployed" />
                        <StatsCounter value={50} label="Hospitals Automated" />
                        <StatsCounter value={10} label="Years of Experience" />
                        <StatsCounter value={98} label="Client Satisfaction %" suffix="%" />
                    </div>
                </div>
            </section>

            {/* Why VASS Section */}
            <section className="py-20 bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        title="Why Choose VASS?"
                        description="We combine deep healthcare domain knowledge with cutting-edge technology to deliver solutions that drive real-world results."
                    />
                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100 transition-transform hover:-translate-y-2">
                            <div className="flex justify-center items-center mb-6">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    <LightbulbIcon className="h-10 w-10 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Deep Domain Expertise</h3>
                            <p className="text-gray-600">With over a decade of experience, we specialize exclusively in healthcare IT, understanding the unique challenges of the industry.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100 transition-transform hover:-translate-y-2">
                            <div className="flex justify-center items-center mb-6">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    <UserFocusIcon className="h-10 w-10 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Client-Centric Approach</h3>
                            <p className="text-gray-600">We partner with our clients, taking a consultative approach to build custom solutions that align perfectly with their operational goals.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100 transition-transform hover:-translate-y-2">
                            <div className="flex justify-center items-center mb-6">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    <FlexibleIcon className="h-10 w-10 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Agile & Scalable Solutions</h3>
                            <p className="text-gray-600">Our solutions are built on modern, scalable architecture, ensuring they grow with your organization and adapt to future needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Logos Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-semibold text-gray-600">Trusted by Healthcare Leaders Nationwide</h2>
                    <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                        {CLIENT_LOGOS.map((logo, index) => (
                            <img key={index} className="h-10 opacity-70 hover:opacity-100 transition-opacity" src={logo} alt={`Client logo ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="bg-primary">
                <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to Transform Your Hospital?</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-indigo-200">
                        Let's build the future of healthcare together. Contact us for a free consultation and discover how we can help you achieve your goals.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-indigo-50 sm:w-auto"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;