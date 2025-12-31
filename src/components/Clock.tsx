import { useState, useEffect } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    const timeString = date.toLocaleTimeString('th-TH');
    const dateString = date.toLocaleDateString('th-TH',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });

    return (
        <div className="glass-card p-6 mx-4 mb-8 text-center animate-fade-in animate-delay-300 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center justify-center gap-2 drop-shadow-sm font-['Krub']">
                <span>⌚️</span> เวลาล่าสุด <span>⌚️</span>
            </h3>
            <div className="bg-white/40 rounded-xl p-4 backdrop-blur-sm border border-white/50 shadow-inner">
                <p className="text-xl font-medium text-gray-600 mb-1 font-['Krub']">{dateString}</p>
                <p className="text-4xl font-bold text-gray-700 font-['Krub'] tracking-wider">{timeString} <span className="text-lg font-normal text-gray-500">น.</span></p>
            </div>
        </div>
    );
};

export default Clock;
