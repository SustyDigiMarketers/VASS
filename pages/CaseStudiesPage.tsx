import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { CASE_STUDIES } from '../constants';

const CaseStudiesPage: React.FC = () => {
    return (
        <div className="bg-white pt-24">
            <div className="bg-light py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionTitle
                        subtitle="Our Work"
                        title="Healthcare IT Success Stories"
                        description="Discover how we've partnered with leading healthcare providers to deliver tangible results and drive innovation."
                    />
                </div>
            </div>
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {CASE_STUDIES.map((study, index) => (
                           <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-gray-100">
                                <img src={study.image} alt={study.project} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <p className="text-sm text-primary font-semibold">{study.client}</p>
                                    <h3 className="text-xl font-bold text-dark mt-2">{study.project}</h3>
                                    <p className="text-gray-600 mt-3"><strong>Result:</strong> {study.impact}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudiesPage;