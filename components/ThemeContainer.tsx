'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
interface Props {
    children: React.ReactNode
}

export default function ThemeContainer(props: Props) {
    return (
        <ThemeProvider attribute='class'>{props.children}</ThemeProvider>
    )
}