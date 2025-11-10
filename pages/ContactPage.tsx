import React from 'react';
import SectionTitle from '../components/SectionTitle';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-white pt-24">
            <div className="bg-light py-20 sm:py-28">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                     <SectionTitle
                        subtitle="Get in Touch"
                        title="Let’s Discuss How VASS Can Transform Your Healthcare Systems"
                        description="Whether you have a question about our services, need a demo, or want to partner with us, we're here to help."
                    />
                </div>
            </div>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-bold text-dark">Send us a message</h3>
                            <form className="mt-6 space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" name="name" id="name" className="mt-1 block w-full bg-light border-gray-300 rounded-md shadow-sm text-dark focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" className="mt-1 block w-full bg-light border-gray-300 rounded-md shadow-sm text-dark focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" name="phone" id="phone" className="mt-1 block w-full bg-light border-gray-300 rounded-md shadow-sm text-dark focus:ring-primary focus:border-primary" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-light border-gray-300 rounded-md shadow-sm text-dark focus:ring-primary focus:border-primary"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-dark">Contact Information</h3>
                            <div className="text-lg text-gray-600">
                                <p className="font-semibold text-primary">Address</p>
                                <p>VASS Software and Solutions Pvt. Ltd.</p>
                                <p>I Floor, No. 15/7, 6th Cross Street, Trustpuram, Kodambakkam, Chennai – 600024</p>
                            </div>
                            <div className="text-lg text-gray-600">
                                <p className="font-semibold text-primary">Phone</p>
                                <p>+91 98765 43210</p>
                            </div>
                            <div className="text-lg text-gray-600">
                                <p className="font-semibold text-primary">Email</p>
                                <p>info@vasssoftwares.com</p>
                            </div>
                            <div>
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.736341793427!2d80.22919831482281!3d13.05212599079948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52665a57088679%3A0x491d34e6f8b654f1!2sTrustpuram%2C%20Kodambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600024!5e0!3m2!1sen!2sin!4v1678887654321!5m2!1sen!2sin"
                                        width="100%" 
                                        height="300" 
                                        style={{border:0}} 
                                        allowFullScreen={true}
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-lg filter grayscale"
                                        title="VASS Office Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;