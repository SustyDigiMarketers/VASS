import React from 'react';

interface SectionTitleProps {
    subtitle?: string;
    title: string;
    description?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, description }) => {
    return (
        <div className="text-center max-w-3xl mx-auto">
            {subtitle && <p className="text-primary font-semibold tracking-wider uppercase">{subtitle}</p>}
            <h2 className={`text-3xl font-extrabold text-dark sm:text-4xl ${subtitle ? 'mt-2' : ''}`}>{title}</h2>
            {description && (
                 <p className="mt-4 text-lg text-gray-600">{description}</p>
            )}
        </div>
    );
};

export default SectionTitle;