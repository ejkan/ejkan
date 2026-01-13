'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import './ThemeSwitcher.css';

type Theme = 'system' | 'light' | 'dark';

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<Theme>('system');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const applyTheme = (themeToApply: Theme) => {
            if (themeToApply === 'system') {
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                document.documentElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
            } else {
                document.documentElement.setAttribute('data-theme', themeToApply);
            }
            localStorage.setItem('theme', themeToApply);
        };

        applyTheme(theme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (theme === 'system') {
                applyTheme('system');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme, mounted]);

    const getNextTheme = (): Theme => {
        if (theme === 'system') return 'light';
        if (theme === 'light') return 'dark';
        return 'system';
    };

    const handleThemeChange = () => {
        setTheme(getNextTheme());
    };

    const renderIcon = () => {
        if (!mounted) return <Laptop size={20} />; // Prevent hydration mismatch

        switch (theme) {
            case 'light':
                return <Sun size={20} />;
            case 'dark':
                return <Moon size={20} />;
            case 'system':
            default:
                return <Laptop size={20} />;
        }
    };

    return (
        <button onClick={handleThemeChange} className="theme-switcher-btn" aria-label={`Switch to ${getNextTheme()} mode`}>
            {renderIcon()}
        </button>
    );
};

export default ThemeSwitcher;
