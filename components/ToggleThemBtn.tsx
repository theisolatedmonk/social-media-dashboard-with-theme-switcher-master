
'use client'
import React from 'react'
import { useTheme } from 'next-themes'
type Props = {}

export default function ToggleThemBtn({ }: Props) {

    const { resolvedTheme, setTheme } = useTheme()
    const theme = resolvedTheme
    function toggleTheme() {
        if (theme == 'dark') setTheme('light');
        if (theme == 'light') setTheme('dark')

    }

    return (
        <button
            onClick={toggleTheme}
            className={`flex h-5 w-10 cursor-pointer items-center rounded-full p-1 ${theme === "light" ? "bg-ToggleLight" : "bg-dark-theme-toggle"
                }`}
        >
            <div
                className={`h-4 w-4 rounded-full bg-white transition-all dark:bg-very-dark-blue-bg ${theme === "light" ? "translate-x-full" : "translate-x-0"
                    }`}
            />
        </button>

    )
}







// <div>
//     The current theme is: {theme}
//     <button onClick={() => setTheme('light')}>Light Mode</button>
//     <button onClick={() => setTheme('dark')}>Dark Mode</button>
// </div>
