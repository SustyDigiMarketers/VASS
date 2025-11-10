import type { NavLink, Service, Product, CaseStudy, TeamMember, BlogPost, Job } from './types';
import { AiIcon, CloudIcon, CybersecurityIcon, ErpIcon } from './components/IconComponents';

export const NAV_LINKS: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
        name: 'Services', 
        path: '/services',
    },
    { 
        name: 'Products', 
        path: '/products',
        subLinks: [
            { name: 'HIMS', path: '/products/hims' },
            { name: 'HRMS', path: '/products/hrms' },
        ]
    },
    { name: 'Contact', path: '/contact' },
];

export const FOOTER_ONLY_LINKS: NavLink[] = [
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
];

export const SERVICES: Service[] = [
    { icon: AiIcon, name: 'HIMS', description: 'Streamlined hospital operations through intelligent automation.' },
    { icon: CloudIcon, name: 'Big Data', description: 'Turning medical data into actionable insights.' },
    { icon: CybersecurityIcon, name: 'Analytics', description: 'Empowering data-driven clinical and business decisions.' },
    { icon: ErpIcon, name: 'IT Consulting', description: 'Strategic technology consulting to enhance efficiency.' },
];

export const PRODUCTS: Product[] = [
    { name: 'VASS HIMS Suite', description: 'A complete hospital management system integrating EMR, EHR, billing, pharmacy, and patient care modules.', price: '', image: 'https://i.imgur.com/3Y1Z7Al.png' },
    { name: 'VASS HealthAnalytics', description: 'Big Data-driven insights for healthcare management and decision-making.', price: '', image: 'https://i.imgur.com/W2uF21G.png' },
    { name: 'VASS Connect', description: 'Cloud-based integration platform connecting hospitals, labs, and radiology systems.', price: '', image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1740&auto=format&fit=crop' },
];

export const CASE_STUDIES: CaseStudy[] = [
    { project: 'Implementing HIMS in a Multi-Specialty Hospital', client: 'ABC Multi-Speciality Hospital, Chennai', impact: '40% improvement in operational efficiency, 25% reduction in patient processing time.', image: 'https://picsum.photos/seed/casestudy1/600/400' },
    { project: 'Analytics for a Hospital Chain', client: 'XYZ Healthcare Group', impact: 'Improved patient outcome predictions by 30% using Big Data.', image: 'https://picsum.photos/seed/casestudy2/600/400' },
    { project: 'IT Infrastructure Overhaul', client: 'General Hospital, Chennai', impact: 'Reduced IT operational costs by 35% through strategic consulting.', image: 'https://picsum.photos/seed/casestudy3/600/400' },
];

export const TEAM_MEMBERS: TeamMember[] = [
    { name: 'John Mathew', role: 'CEO', image: 'https://picsum.photos/seed/john/200' },
    { name: 'Anitha R', role: 'CTO', image: 'https://picsum.photos/seed/anitha/200' },
    { name: 'Vikram S', role: 'Head of Engineering', image: 'https://picsum.photos/seed/vikram/200' },
    { name: 'Priya Sharma', role: 'Head of Product', image: 'https://picsum.photos/seed/priya/200' },
];

export const BLOG_POSTS: BlogPost[] = [
    { title: 'How Digital HIMS Systems Are Transforming Indian Hospitals', category: 'HIMS', readTime: '7 min read', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1740&auto=format&fit=crop', day: '03', month: 'Apr', date: 'April 03, 2024' },
    { title: 'The Role of Big Data in Healthcare Decision Making', category: 'Big Data', readTime: '5 min read', image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1706&auto=format&fit=crop', day: '08', month: 'Apr', date: 'April 08, 2024' },
    { title: 'Why Every Hospital Needs an Integrated Analytics Dashboard', category: 'Analytics', readTime: '9 min read', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop', day: '16', month: 'May', date: 'May 16, 2024' },
    { title: 'Cybersecurity in Healthcare: Protecting Patient Data', category: 'Security', readTime: '6 min read', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1642&auto=format&fit=crop', day: '25', month: 'May', date: 'May 25, 2024' },
    { title: 'The Future of EMR and EHR in Indian Healthcare', category: 'HIMS', readTime: '8 min read', image: 'https://images.unsplash.com/photo-1584515933487-779824d27937?q=80&w=1740&auto=format&fit=crop', day: '15', month: 'Jun', date: 'June 15, 2024' },
];

export const JOBS: Job[] = [
    { title: 'Software Engineer – HIMS Development', experience: '2-5 yrs', location: 'Chennai', skills: ['React', 'Node.js', 'PostgreSQL'] },
    { title: 'Data Analyst – Healthcare Analytics', experience: '3-6 yrs', location: 'Chennai', skills: ['Python', 'SQL', 'Tableau'] },
    { title: 'Project Manager – Healthcare IT Solutions', experience: '5+ yrs', location: 'Chennai', skills: ['Agile', 'PMP', 'Healthcare Domain'] },
    { title: 'Technical Consultant – Hospital Integration', experience: '4+ yrs', location: 'Remote', skills: ['HL7', 'API Integration', 'Customer Support'] },
];

export const CLIENT_LOGOS = [
    'https://via.placeholder.com/150x50/transparent/6B7280?text=Apollo+Hospitals',
    'https://via.placeholder.com/150x50/transparent/6B7280?text=Fortis+Healthcare',
    'https://via.placeholder.com/150x50/transparent/6B7280?text=Narayana+Health',
    'https://via.placeholder.com/150x50/transparent/6B7280?text=Manipal+Hospitals',
    'https://via.placeholder.com/150x50/transparent/6B7280?text=Global+Hospitals',
];

export const BLOG_CATEGORIES = [
    { name: 'HIMS', count: 5 },
    { name: 'Analytics', count: 3 },
    { name: 'Big Data', count: 8 },
    { name: 'Healthcare IT', count: 4 },
];

export const BLOG_TAGS = ['HIMS', 'EMR', 'EHR', 'Analytics', 'Big Data', 'Patient Care'];