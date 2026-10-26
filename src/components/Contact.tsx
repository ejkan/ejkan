import {PaintbrushVertical, CatIcon, Mail } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

/*
 * This conponent displays SNS links and E-mail info.
 * Icons provided by Lucide at https://lucide.dev.
 * Replaced icons into commons, instead of registered trademarks.
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
                    <PaintbrushVertical size={24} />
                </a>
                <a href="https://github.com/ejkan" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)' }}>
                    <CatIcon size={24} />
                </a>
                <a href="mailto:ejkan@pm.me" style={{ color: 'var(--color-text)' }}>
                    <Mail size={24} />
                </a>
            </div>
            <ThemeSwitcher />
        </footer>
    );
}
