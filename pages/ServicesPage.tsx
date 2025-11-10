import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_LOGOS } from '../constants';
import { LightbulbIcon, FlexibleIcon, CybersecurityIcon, StarIcon } from '../components/IconComponents';

const servicePillars = [
    {
        icon: LightbulbIcon,
        title: "Healthcare Information Management System (HIMS)",
        description: "We build integrated HIMS solutions with modules for patient registration, billing, diagnostics, pharmacy, and reporting. Our platforms comply with EMR/EHR standards to ensure seamless data management.",
        features: [
            "Patient Registration & EMR",
            "Pharmacy & Inventory",
            "Billing & Insurance Claims",
        ],
    },
    {
        icon: FlexibleIcon,
        title: "Big Data & Analytics",
        description: "VASS uses advanced analytics tools to process complex healthcare data, helping hospitals make better clinical, operational, and financial decisions with actionable insights.",
        features: [
            "Clinical Decision Support",
            "Operational Analytics",
            "Predictive Modeling",
        ],
    },
    {
        icon: CybersecurityIcon,
        title: "IT Consulting",
        description: "We offer strategic IT consulting to help healthcare organizations reduce costs, improve infrastructure efficiency, and ensure data security and compliance in a complex regulatory environment.",
        features: [
            "IT Cost Optimization",
            "Infrastructure Planning",
            "HIPAA Compliance",
        ],
    },
];

const testimonials = [
    {
        quote: "The HIMS platform from VASS has revolutionized our workflow. The modular architecture and dedicated support allowed us to significantly improve patient care and operational efficiency.",
        author: "Dr. Kumar",
        title: "Chief Medical Officer, ABC Multi-Speciality Hospital"
    },
    {
        quote: "VASS HealthAnalytics provided us with deep insights into our operations, helping us reduce costs by 20% while improving patient outcomes. A game-changer for our hospital chain.",
        author: "Ms. Priya Reddy",
        title: "CEO, XYZ Healthcare Group"
    },
    {
        quote: "The IT consulting from VASS was exceptional. They streamlined our infrastructure and ensured we were fully compliant with all regulations. Highly recommended.",
        author: "Mr. Arjun Singh",
        title: "IT Director, General Hospital, Chennai"
    }
];

const ServicesPage: React.FC = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonialIndex(prevIndex =>
                (prevIndex + 1) % testimonials.length
            );
        }, 5000); // Change testimonial every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-primary text-white pt-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                                Our Healthcare IT Services
                            </h1>
                            <p className="mt-4 text-2xl font-light">
                                Expert solutions for modern healthcare challenges.
                            </p>
                            <p className="mt-6 max-w-xl text-lg text-indigo-200">
                                VASS provides a comprehensive suite of services, from custom HIMS development to strategic IT consulting, designed to empower healthcare providers and improve patient outcomes.
                            </p>
                            <div className="mt-8">
                                <Link
                                    to="/contact"
                                    className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-indigo-50 transition-transform hover:scale-105"
                                >
                                    Discuss Your Needs
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-full flex items-center justify-center">
                            <img 
                                src="https://images.unsplash.com/photo-1530497610242-b8aab8d16468?q=80&w=1852&auto=format&fit=crop"
                                alt="Healthcare Services Illustration" 
                                className="rounded-lg shadow-2xl max-w-md w-full"
                             />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Service Pillars */}
            <section className="py-20 bg-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {servicePillars.map((pillar) => {
                            const Icon = pillar.icon;
                            return (
                                <div key={pillar.title} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col">
                                    <div className="flex items-center gap-4">
                                        <Icon className="h-8 w-8 text-primary" />
                                        <h3 className="text-2xl font-bold text-dark">{pillar.title}</h3>
                                    </div>
                                    <p className="mt-4 text-gray-600 flex-grow">{pillar.description}</p>
                                    <p className="mt-6 font-semibold text-dark">Why choose VASS?</p>
                                    <ul className="mt-2 space-y-2">
                                        {pillar.features.map(feature => (
                                            <li key={feature} className="flex items-center text-gray-700">
                                                <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-dark">Ready to enhance your hospital's efficiency?</h2>
                    <p className="mt-4 text-lg text-gray-600">Request a free consultation today.</p>
                     <div className="mt-8">
                        <Link to="/contact" className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-transform hover:scale-105">
                           Get Started Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-20 bg-primary text-white">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-bold">Trusted by Top Hospitals.</h2>
                        <p className="mt-2 text-lg text-indigo-200">Our solutions are trusted by leading healthcare institutions.</p>
                        <p className="mt-4 text-4xl font-extrabold">Over <span className="text-5xl">50+</span> Hospitals</p>
                        <p className="text-indigo-200">have transformed their operations with VASS.</p>
                    </div>
                    <div>
                        <div className="relative min-h-[14rem] overflow-hidden">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                        index === currentTestimonialIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <div className="flex mb-2">
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-6 w-6 text-yellow-400" />)}
                                    </div>
                                    <blockquote className="text-xl italic">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <footer className="mt-4">
                                        <p className="font-semibold">{testimonial.author},</p>
                                        <p className="text-indigo-200">{testimonial.title}</p>
                                    </footer>
                                </div>
                            ))}
                        </div>
                    </div>
                 </div>
            </section>
            
             {/* Partnerships & Awards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-2xl font-semibold text-gray-600 mb-8">Our Technology Partners:</h2>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                        {CLIENT_LOGOS.slice(0, 3).map((logo, index) => (
                            <img key={index} className="h-8 opacity-70 hover:opacity-100 transition-opacity" src={logo.replace('text=','text=TechPartner')} alt={`Partner logo ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;