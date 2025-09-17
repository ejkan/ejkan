import "tailwindcss";
import {useEffect, useRef, useState} from "react";

const fontStyle = {
    fontFamily: 'Krub',
    fontWeight: '700',
    fontSize: '3rem',
    padding: '.5rem',
    color: 'hsl(351, 90%, 70%)'
} as const;

const Welcome = () => {
    const [isInView, setIsInView] = useState(false);
    const welcomeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (welcomeRef.current) {
            observer.observe(welcomeRef.current);
        }

        return () => {
            if (welcomeRef.current) {
                observer.unobserve(welcomeRef.current);
            }
        };
    }, []);
    return (<div ref={welcomeRef} className={isInView ? 'zoom-in-fade-animate' : 'zoom-in-fade-initial'}>
        <h1 style={fontStyle}>เพื่อนเรียก เจ้·กานต์™</h1>
    </div>);

}

export default Welcome;