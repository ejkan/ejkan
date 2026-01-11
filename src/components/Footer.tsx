import { Linkedin, Mail, Instagram, Figma } from 'lucide-react';

/*
 * Footer Component
 * Displays social media links and contact info.
 * Icons provided by lucide-react.
 */
export default function Footer() {
    return (
        <footer style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            padding: '2rem',
            marginTop: 'auto',
            backgroundColor: 'transparent'
        }}>
            <a href="https://figma.com/@ejdsin" target="_blank" rel="noopener noreferrer" style={{ color: '#444' }}>
                <Figma size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2' }}>
                <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/ejkan_" target="_blank" rel="noopener noreferrer" style={{ color: '#E1306C' }}>
                <Instagram size={24} />
            </a>
            <a href="mailto:ejaekan@pm.me" style={{ color: '#444' }}>
                <Mail size={24} />
            </a>
        </footer>
    );
}
