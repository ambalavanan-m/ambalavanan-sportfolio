import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const theme: Theme = 'light';

    // Dummy function since the toggle is removed from UI
    const toggleTheme = () => { };

    useEffect(() => {
        const root = window.document.documentElement;
        // Remove dark class if it was previously set
        root.classList.remove('dark');
        // Force light mode
        root.classList.add('light');
        localStorage.setItem('theme', 'light');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
