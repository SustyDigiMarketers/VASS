import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS, BLOG_CATEGORIES, BLOG_TAGS } from '../constants';
import { SearchIcon, ArrowRightIcon } from '../components/IconComponents';

const SidebarWidget: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-xl font-bold text-dark pb-4 border-b border-gray-200">{title}</h3>
        <div className="mt-4">
            {children}
        </div>
    </div>
);

const BlogPage: React.FC = () => {
    return (
        <div className="bg-light">
            {/* Hero Section */}
            <section className="relative pt-24 bg-dark text-white">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1740&auto=format&fit=crop" 
                        alt="Blog Background" 
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">Healthcare IT Insights</h1>
                    <p className="mt-4 text-lg text-gray-300">Expert analysis on the future of healthcare technology.</p>
                </div>
            </section>
            
            {/* Main Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Blog Posts */}
                        <div className="lg:col-span-2">
                            <div className="grid gap-8 md:grid-cols-2">
                                {BLOG_POSTS.map((post) => (
                                    <div key={post.title} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 group">
                                        <div className="relative">
                                            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                                            <div className="absolute bottom-4 right-4 bg-primary text-white text-center rounded-md px-3 py-1">
                                                <p className="text-lg font-bold">{post.day}</p>
                                                <p className="text-sm">{post.month}</p>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <p className="text-sm text-gray-500 mb-2">{post.category}</p>
                                            <h2 className="text-xl font-bold text-dark group-hover:text-primary transition-colors duration-300">
                                                <Link to="#">{post.title}</Link>
                                            </h2>
                                            <Link to="#" className="flex items-center mt-4 text-primary font-semibold hover:text-primary-dark transition-colors">
                                                Read More <ArrowRightIcon className="w-4 h-4 ml-2" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-8">
                            <SidebarWidget title="Search">
                                <form className="flex">
                                    <input type="text" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-primary focus:border-primary text-dark" />
                                    <button type="submit" className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark">
                                        <SearchIcon className="h-5 w-5" />
                                    </button>
                                </form>
                            </SidebarWidget>

                            <SidebarWidget title="Categories">
                                <ul className="space-y-3">
                                    {BLOG_CATEGORIES.map(cat => (
                                        <li key={cat.name}>
                                            <Link to="#" className="flex justify-between items-center text-gray-600 hover:text-primary p-3 border rounded-md transition-colors">
                                                <span>{cat.name}</span>
                                                <span>({cat.count})</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </SidebarWidget>

                            <SidebarWidget title="Recent Posts">
                                <ul className="space-y-4">
                                    {BLOG_POSTS.slice(0, 3).map(post => (
                                        <li key={post.title} className="flex items-center space-x-4">
                                            <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded-md flex-shrink-0" />
                                            <div>
                                                <p className="text-sm text-gray-500">{post.date}</p>
                                                <h4 className="font-semibold text-dark hover:text-primary">
                                                    <Link to="#">{post.title.substring(0, 30)}...</Link>
                                                </h4>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </SidebarWidget>

                            <SidebarWidget title="Tags">
                                <div className="flex flex-wrap gap-2">
                                    {BLOG_TAGS.map(tag => (
                                        <Link key={tag} to="#" className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-sm hover:bg-primary hover:text-white transition-colors">
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </SidebarWidget>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;