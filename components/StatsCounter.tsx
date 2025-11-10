import React, { useState, useEffect, useRef } from 'react';

interface StatsCounterProps {
    value: number;
    label: string;
    suffix?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ value, label, suffix = '+' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTimestamp: number | null = null;
                    const end = value;
                    const duration = 2000;

                    const step = (timestamp: number) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        const currentVal = Math.floor(progress * end);
                        
                        setCount(currentVal);

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            setCount(end);
                        }
                    };

                    window.requestAnimationFrame(step);
                    
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [value]);

    return (
        <div ref={ref} className="text-center">
            <p className="text-5xl font-extrabold text-primary">{count}{suffix}</p>
            <p className="text-lg text-gray-600 mt-2">{label}</p>
        </div>
    );
};

export default StatsCounter;