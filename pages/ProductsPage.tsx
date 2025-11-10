import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const ProductsPage: React.FC = () => {
    return (
        <div className="bg-white pt-24">
            <div className="bg-light py-20 sm:py-28">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <SectionTitle
                        subtitle="Our Products"
                        title="Healthcare IT Products for the Modern Enterprise"
                        description="Explore our suite of powerful, scalable, and secure software products designed to solve complex challenges in the healthcare industry."
                    />
                </div>
            </div>
            
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {PRODUCTS.map((product, index) => (
                            <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col">
                                <img src={product.image} alt={product.name} className="w-full h-56 object-contain bg-gray-50 p-4" />
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-dark">{product.name}</h3>
                                    <p className="mt-4 text-gray-600 flex-grow">{product.description}</p>
                                    <Link to="/contact" className="mt-8 w-full text-center px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark transition">
                                        Request a Demo
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

export default ProductsPage;