// Fix: Import React to use React.ComponentType
import React from 'react';

export interface NavLink {
    name: string;
    path: string;
    subLinks?: NavLink[];
}

export interface Service {
    icon: React.ComponentType<{ className?: string }>;
    name: string;
    description: string;
}

export interface Product {
    name: string;
    description: string;
    price: string;
    image: string;
}

export interface CaseStudy {
    project: string;
    client: string;
    impact: string;
    image: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
}

export interface BlogPost {
    title: string;
    category: string;
    readTime: string;
    image: string;
    day: string;
    month: string;
    date: string;
}

export interface Job {
    title: string;
    experience: string;
    location: string;
    skills: string[];
}