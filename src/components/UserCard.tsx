import { useState, useEffect, useRef } from 'react';
import pfp from './imgs/pfp.webp';

const cardbody = {
    padding: '1rem',
    borderRadius: '.75rem',
    textAlign: 'center',
    backgroundColor: 'hsl(351, 80%, 70%)',
    maxWidth: '25rem',
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
} as const;

const cardfont = {
    color: "hsl(18, 72%, 93%)",
    margin: "1rem",
    fontFamily: "Krub",
    fontWeight: "500",
    fontSize: "1rem",
} as const;

const cardheader = {
    color: 'hsl(160, 43%, 80%)',
    margin: '.625rem',
    fontSize: '1.5rem' ,
    fontFamily: 'Krub',
    fontWeight: '700'
} as const;

const cardpic = {
    border: '.5rem solid hsl(18, 72%, 93%)',
    borderRadius: '50%',
    width: '80%',
    height: '80%',
} as const;

const Avatar = () => (<img src={pfp} alt="Profile Picture" style={cardpic}/>);
const UserName = () => (<h3 style={cardheader}>จิรัญญา นวลละออง</h3>);
const SchoolYear = () => (<p style={cardfont}>นักศึกษาชั้นปีที่ 3</p>);
const SchoolMajor = () => (<p style={cardfont}>สาขาเทคโนโลยีสารสนเทศ</p>);
const School = () => (<p style={cardfont}>คณะวิทยาศาสตร์ มหาวิทยาลัยศิลปากร</p>);

const UserCard = () => {
    const [isInView, setIsInView] = useState(false);
    const cardRef = useRef(null);

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

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={isInView ? 'zoom-in-fade-animate' : 'zoom-in-fade-initial'}
            style={cardbody}
        >
            <Avatar />
            <UserName />
            <SchoolYear />
            <SchoolMajor />
            <School />
        </div>
    );
};

export default UserCard;