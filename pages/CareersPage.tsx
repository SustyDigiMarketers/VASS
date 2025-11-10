import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { JOBS } from '../constants';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
    return (
        <div className="bg-white pt-24">
            <div className="bg-light py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionTitle
                        subtitle="Join Our Team"
                        title="Build the Future of Healthcare IT"
                        description="We’re building the future of healthcare IT. Join us to innovate, collaborate, and make an impact on a global scale. Explore our open roles."
                    />
                </div>
            </div>
            
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {JOBS.map((job, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center border border-gray-100">
                                <div>
                                    <h3 className="text-xl font-bold text-dark">{job.title}</h3>
                                    <p className="text-gray-500 mt-1">{job.experience} &bull; {job.location}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {job.skills.map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-gray-100 text-primary text-xs font-semibold rounded-full">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                     <Link to="#" className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;