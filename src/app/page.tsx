'use client';

import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import Image from 'next/image';
import profileImg from '../assets/imgs/pfp.avif';
import './page.css';
import { RotateWords } from '../components/RotateWords';
import { TypingEffect } from '../components/TypingEffect';

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
                        <span style={{ color: 'var(--color-primary)' }}>
                            <RotateWords
                                words={["ejkan_", "JKan", "JaeKan", "Jirawat", "Kan", "Karn", "whatsever_"]}
                                text=""
                            />
                        </span>
                    </h1>
                </div>

                {/* Middle Column: Portrait Image */}
                <div className="hero-image-center">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: 0.2
                        }}
                        className="profile-image-wrapper"
                    >
                        <Image
                            src={profileImg}
                            alt="Portrait"
                            className="profile-image"
                            priority fetchPriority="high"
                            width={800}
                            height={800}
                        />
                    </motion.div>
                </div>

                {/* Right Column: Subtitle */}
                <div className="hero-subtitle-container">
                    <p className="hero-subtitle">
                        <TypingEffect text="_Crafting digital experiences" /> <br />
                        <span>
                            <TypingEffect text="with a touch of delightful_" />
                        </span>
                    </p>
                </div>
            </main>

            <Contact />
        </div>
    );
}
