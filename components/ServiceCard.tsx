import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const Icon = service.icon;
    return (
        <div className="group bg-white p-8 rounded-lg text-center transition-all duration-300 hover:bg-primary hover:-translate-y-2 shadow-md hover:shadow-xl border border-gray-100">
            <div className="flex justify-center items-center mb-6">
                <div className="bg-light p-4 rounded-full transition-colors duration-300 group-hover:bg-white/20">
                    <Icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-white" />
                </div>
            </div>
            <h3 className="text-xl font-bold text-dark mb-2 transition-colors duration-300 group-hover:text-white">{service.name}</h3>
            <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-200">{service.description}</p>
        </div>
    );
};

export default ServiceCard;