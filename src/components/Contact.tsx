import { Figma, Github, Instagram, Mail } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

/*
 * Contact Component
 * Displays social media links and contact info.
 * Icons provided by lucide-react at https://lucide.dev.
*/

export default function Contact() {
    return (
        <footer style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            padding: '2rem',
            marginTop: 'auto',
            backgroundColor: 'transparent'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
            }}>
                <a href="https://figma.com/@ejdsin" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)' }}>
                    <Figma size={24} />
                </a>
                <a href="https://github.com/ejkan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)' }}>
                    <Github size={24} />
                </a>
                <a href="https://instagram.com/ejkan_" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)' }}>
                    <Instagram size={24} />
                </a>
                <a href="mailto:ejaekan@pm.me" style={{ color: 'var(--color-text)' }}>
                    <Mail size={24} />
                </a>
            </div>
            <ThemeSwitcher />
        </footer>
    );
}
