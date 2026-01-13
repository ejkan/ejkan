import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import './HomePage.css';
import profileImg from '../assets/imgs/pfp.avif';

/*
 * HomePage Component
 * Layout: Title | Image | Subtitle
 * Animation: Image pops up (scales up + fade in)
 */
export default function HomePage() {
    return (
        <div className="home-container">
            <main className="hero-section">
                {/* Left Column: Title */}
                <div className="hero-title-container">
                    <h1 className="hero-title">
                        Call me <br />
                        <span>ejkan_</span>
                    </h1>
                </div>

                {/* Middle Column: Portrait Image */}
                <div className="hero-image-center">
                    <motion.img
                        src={profileImg.src}
                        alt="Portrait"
                        className="profile-image"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2
                        }}
                    />
                </div>

                {/* Right Column: Subtitle */}
                <div className="hero-subtitle-container">
                    <p className="hero-subtitle">
                        👩🏼‍🎨 Crafting digital experiences<br />
                        <span>with a touch of delightful. 🤗</span>
                    </p>
                </div>
            </main>

            <Contact />
        </div>
    );
}
