'use client';
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';


const ThemeToggler = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {mounted && (
        currentTheme === 'dark' ? <span className='text-xl cursor-pointer
        hover:text-indigo-500' onClick={() => setTheme('light')}><MdLightMode /></span> : <span className='text-xl cursor-pointer
        hover:text-indigo-500' onClick={() => setTheme("dark")}><BsFillMoonStarsFill /></span>
      )}
    </>
  )
}

export default ThemeToggler